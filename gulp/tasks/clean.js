var path = require('path');
var constants = require('../const');
var del = require("del");

exports.dependencies = []

exports.task = function () {

    return del([
        path.join(constants.ROOT, constants.DIST, '/'),
        path.join(constants.ROOT, constants.TMP, '/')
    ])
};