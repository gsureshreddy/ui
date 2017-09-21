pipeline {
  agent any
  stages {
    stage('pre-requisites') {
      steps {
        sh '''npm install
bower install --allowRoot=true'''
      }
    }
    stage('build') {
      steps {
        sh 'gulp build'
      }
    }
  }
  post {
    success {
        sh 'git commit -m "Jenkins # $BUILD_NUMBER " -- dist'
    }
  }
}