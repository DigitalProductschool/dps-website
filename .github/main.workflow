workflow "Build and deploy" {
  on = "push"
  resolves = [
    "Verify GKE deployment"
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
  args = "run build && ls -al"
}

action "Build Docker Image" {
  needs = ["npm build"]
  uses = "actions/docker/cli@master"
  args = ["build", "-t", "dps-website", "-f", "deployment/Dockerfile", "."]
}

# Deploy Filter
action "Deploy branch filter" {
  needs = ["Build Docker Image"]
  uses = "actions/bin/filter@master"
  args = "branch staging"
}

action "Tag image for GCR" {
  uses = "actions/docker/tag@master"
  needs = [ "Build Docker Image", "Deploy branch filter"]
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

# TODO Add Action to start GitHub Deploy
action "Deploy to GKE" {
  needs = ["Push image to GCR", "Load GKE kube credentials"]
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
  env = {
    DEPLOYMENT_NAME = "dpschool-deployment"
  }
  args = "rollout status deployment/dpschool-deployment"
}
