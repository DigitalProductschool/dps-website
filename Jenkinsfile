def project = 'dps-website-staging'
def appName = 'dpschool-website'
def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

pipeline {
  agent {
    kubernetes {
      label 'website'
      defaultContainer 'jnlp'
      yaml """
      apiVersion: v1
      kind: Pod
      metadata:
      labels:
        component: ci
      spec:
        # Use service account that can deploy to all namespaces
        serviceAccountName: cd-jenkins
        containers:
        - name: gcloud
          image: gcr.io/cloud-builders/gcloud
          command:
          - cat
          tty: true
        - name: kubectl
          image: gcr.io/cloud-builders/kubectl
          command:
          - cat
          tty: true
      """
    }
  }
  stages {
    stage('Build and push image with Container Builder') {
      when { branch 'stage' }
      steps {
        container('gcloud') {
          sh "PYTHONUNBUFFERED=1 gcloud container builds submit -t ${imageTag} ."
        }
      }
    }
    stage('Deploy Canary') {
      // Canary branch
      when { branch 'stage' }
      steps {
        container('kubectl') {
          // Change deployed image in canary to the one we just built
          sh("sed -i.bak 's#gcr.io/dps-website-staging/github-digitalproductschool-website:0.0.1#${imageTag}#' ./kubernetes-deployment.yaml")
          sh("kubectl --namespace=staging apply -f kubernetes-deployment.yaml")
          # Block until rollout complete
          sh("kubectl rollout status deployment/dpschool-deployment -n staging")
        }
      }
    }
  }
}
