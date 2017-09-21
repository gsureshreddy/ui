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
'''
        git(url: 'https://github.com/gsureshreddy/ui.git', branch: 'master', credentialsId: 'github')
        sh '''git commit -m "Jenkins" -- dist
git push'''
      }
    }
  }
}