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
    stage('git check-in') {
      steps {
        sh '''git commit -m "Jenkins-Commit" -- dist
git push'''
      }
    }
  }
}