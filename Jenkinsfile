pipeline {
    agent any

    options {
        description('A pipeline to build and test the CI/CD workshop repository')
        displayName('Alistair CI/CD workshop pipeline')
    }

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
                    junit 'reports/unit-tests.xml'
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
                    junit 'reports/cypress-tests.xml'
                }
            }
        }
    }
}
