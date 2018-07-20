pipeline {
    agent {
        environment {
            IBM_USER = credentials('jenkins-ibm-user-id')
            IBM_PWD = credentials('jenkins-ibm-pwd-id')
            IBM_ACCOUNT_ID = credentials('jenkins-ibm-account-id')
        }
        docker.withRegistry('https://registry.eu-de.bluemix.net') {
            docker.image('registry.eu-de.bluemix.net/digital_product_school/ibm-base:test').inside {
                sh 'ibmcloud login -a https://api.eu-de.bluemix.net -u $IBM_USER -p $IBM_PWD -c $IBM_ACCOUNT_ID'
            }
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'ibmcloud info'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
