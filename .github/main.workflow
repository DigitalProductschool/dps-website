workflow "Build and deploy" {
  on = "push"
  resolves = [
    "Delete old images from GCR",
  ]
}

action "Setup Google Cloud" {
  needs = ["Tag image for GCR"]
  uses = "actions/gcloud/auth@master"
  secrets = ["GCLOUD_AUTH"]
}

action "npm install" {
  uses = "actions/npm@master"
  args = "install"
}

action "npm build" {
  needs = ["npm install"]
  uses = "actions/npm@master"
  args = "run build"
}

action "Build Docker Image" {
  needs = ["npm build"]
  uses = "actions/docker/cli@master"
  args = ["build", "-t", "dps-website", "-f", "deployment/Dockerfile", "."]
}

action "Deploy branch filter" {
  needs = ["Build Docker Image"]
  uses = "actions/bin/filter@master"
  args = "branch staging"
}

action "Tag image for GCR" {
  uses = "actions/docker/tag@master"
  needs = ["Build Docker Image", "Deploy branch filter"]
  env = {
    PROJECT_ID = "core-228912"
    APPLICATION_NAME = "dps-website"
  }
  args = ["dps-website", "gcr.io/$PROJECT_ID/$APPLICATION_NAME"]
}

action "Set Credential Helper for Docker" {
  needs = ["Setup Google Cloud", "Tag image for GCR"]
  uses = "actions/gcloud/cli@master"
  args = ["auth", "configure-docker", "--quiet"]
}

action "Push image to GCR" {
  needs = ["Setup Google Cloud", "Set Credential Helper for Docker", "Tag image for GCR"]
  uses = "actions/gcloud/cli@master"
  runs = "sh -c"
  env = {
    PROJECT_ID = "core-228912"
    APPLICATION_NAME = "dps-website"
  }
  args = ["docker push gcr.io/$PROJECT_ID/$APPLICATION_NAME"]
}

action "Load GKE kube credentials" {
  needs = ["Setup Google Cloud", "Push image to GCR"]
  uses = "actions/gcloud/cli@master"
  env = {
    PROJECT_ID = "core-228912"
    CLUSTER_NAME = "the-shire"
  }
  args = "container clusters get-credentials $CLUSTER_NAME --zone europe-west3-a --project $PROJECT_ID"
}

action "Set Google Cloud Defaults" {
  needs = ["Load GKE kube credentials"]
  uses = "actions/gcloud/cli@master"
  env = {
    PROJECT_ID = "core-228912"
    COMPUTE_ZONE = "europe-west3-a"
    CLUSTER_NAME = "the-shire"
  }
  args = "config set project $PROJECT_ID && gcloud config set compute/zone $COMPUTE_ZONE && gcloud config set container/cluster $CLUSTER_NAME"
}

action "Deploy to GKE" {
  needs = ["Push image to GCR", "Set Google Cloud Defaults"]
  uses = "docker://gcr.io/cloud-builders/kubectl"
  env = {
    PROJECT_ID = "core-228912"
    APPLICATION_NAME = "dps-website"
    DEPLOYMENT_NAME = "dpschool-deployment"
  }
  runs = "sh -l -c"
  args = ["SHORT_REF=$(echo ${GITHUB_SHA} | head -c7) && cat $GITHUB_WORKSPACE/deployment/kubernetes.yaml | sed 's/PROJECT_ID/'\"$PROJECT_ID\"'/' | sed 's/APPLICATION_NAME/'\"$APPLICATION_NAME\"'/' | sed 's/TAG/'\"$SHORT_REF\"'/' | kubectl apply -f - "]
}

action "Verify GKE deployment" {
  needs = ["Deploy to GKE"]
  uses = "docker://gcr.io/cloud-builders/kubectl"
  args = "rollout status deployment/dpschool-deployment"
}

action "Install test dependencies" {
  needs = ["Verify GKE deployment"]
  uses = "actions/npm@master"
  args = "install --prefix e2e-tests"
}

action "Run End-to-end staging tests" {
  needs = ["Install test dependencies"]
  uses = "actions/npm@master"
  env = {
    WEBSITE = "http://35.242.202.218"
  }
  args = "test --prefix e2e-tests"
}

action "Deploy Notification" {
  needs = "Run End-to-end staging tests"
  uses = "rtCamp/action-slack-notify@master"
  secrets = [
    "SLACK_WEBHOOK",
  ]
  env = {
    SLACK_TITLE = "\"Post Title\""
    SLACK_COLOR = "\"#3278BD\""
    SLACK_USERNAME = "\"deploy-Status\""
    SLACK_CHANNEL = "\"deploy-notifications\""
    SLACK_MESSAGE = "\"Post Content :rocket:\""
  }
}

action "Delete old images from GCR" {
  needs = ["Deploy Notification"]
  uses = "actions/gcloud/cli@master"
  runs = ["sh", "-c", "./deployment/entrypoint.sh"]
}
