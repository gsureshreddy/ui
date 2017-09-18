var gulp = require("gulp");
var plugins = require('gulp-load-plugins')();
var conf = require("./gulp/conf");

plugins.del = require("del");
plugins.path = require("path");
plugins.wiredep = require('wiredep').stream;
plugins._ = require('lodash');
plugins.browserSync = require('browser-sync');
plugins.browserSyncSpa = require('browser-sync-spa');
plugins.proxyMiddleware = require('http-proxy-middleware');
plugins.util = require("util");

var taskFiles = require('fs').readdirSync("./gulp/tasks/");

taskFiles.forEach(function (taskFile) {
    require("./gulp/tasks/" + taskFile)(gulp, plugins, conf)
})
