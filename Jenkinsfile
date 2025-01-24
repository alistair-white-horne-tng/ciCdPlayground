pipeline {
    agent any
    tools {
        nodejs 'yarn'
    }

    stages {
        stage('install') {
            steps {
                sh 'yarn'
            }
        }

        stage('build') {
            steps {
                sh 'yarn build'
            }
        }

        stage('test') {
            steps {
                sh 'yarn test'
            }
        }

        stage('e2e-test') {
            steps {
                sh 'yarn test:e2e'
            }
        }
    }

    post {
        always {
            junit '**/reports/**/*.xml'
        }
    }
}
