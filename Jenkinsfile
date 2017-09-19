pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        build 'ui'
      }
    }
    stage('run') {
      steps {
        sh 'gulp serve:docs'
      }
    }
  }
}