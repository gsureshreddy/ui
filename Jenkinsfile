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
git add ./dist
git commit -m "Jenkins #$BUILD_NUMBER" -- dist
git push https://${GITUSER_USR}:${GITUSER_PSW}@github.com/gsureshreddy/ui.git'''
      }
    }
  }
  environment {
    GITUSER = 'credentials(\'github\')'
  }
}