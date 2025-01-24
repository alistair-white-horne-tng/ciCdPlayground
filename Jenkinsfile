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

        stage('unit-test') {
            steps {
                sh 'yarn test'
            }
            post {
                always {
                    junit '**/reports/**/*.xml'
                }
            }
        }

        stage('build') {
            steps {
                sh 'yarn build'
            }
        }

        stage('e2e-test') {
            steps {
                sh 'yarn test:e2e'
            }
            post {
                always {
                    junit '**/reports/**/*.xml'
                }
            }
        }
    }
}
