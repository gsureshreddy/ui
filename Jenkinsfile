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
git commit -m "Jenkins #$BUILD_NUMBER"
git push https://gsureshreddy:sush$81sure@github.com/gsureshreddy/ui.git'''
      }
    }
  }
}