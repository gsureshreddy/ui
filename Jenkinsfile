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
        git(url: 'https://github.com/gsureshreddy/ui.git', branch: 'master', credentialsId: 'github')
        sh '''npm install
bower install --allowRoot=true
gulp build
git commit -m "Jenkins" -- dist
git push'''
      }
    }
  }
}