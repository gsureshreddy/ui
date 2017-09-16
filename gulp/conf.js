var args = require('minimist')(process.argv.slice(2));
var path = require("path");
var VERSION = args.version || require('../package.json').version;
var ROOT = path.normalize(__dirname + '/..');

module.exports = {
    srcRoot : path.join(ROOT, "/src/"),
    buildRoot : path.join(ROOT, "/build/"),
    distRoot : path.join(ROOT, "/dist/"),
    tmpRoot : path.join(ROOT, "/.tmp/")
}