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
        sh '''gulp build
git commit -am "Build #$BUILD_NUMBER" -- dist
git push'''
      }
    }
  }
  post {
    success {
      sh 'git commit -am "Jenkins #$BUILD_NUMBER "'
      
    }
    
  }
}