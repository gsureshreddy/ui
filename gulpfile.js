var gulp = require("gulp");
var plugins = require('gulp-load-plugins')();
var conf = require("./gulp/conf");

plugins.del = require("del");
plugins.path = require("path");

var taskFiles = require('fs').readdirSync("./gulp/tasks/");

taskFiles.forEach(function (taskFile) {
    require("./gulp/tasks/" + taskFile)(gulp, plugins, conf)
})
