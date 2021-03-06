var args = require('minimist')(process.argv.slice(2));
var path = require("path");
var VERSION = args.version || require('../package.json').version;
var ROOT = path.normalize(__dirname + '/..');

module.exports = {
    rootDir : ROOT,
    srcRoot : path.join(ROOT, "/src/"),
    docsRoot : path.join(ROOT, "/docs/"),
    buildRoot : path.join(ROOT, "/build/"),
    distRoot : path.join(ROOT, "/dist/"),
    tmpRoot : path.join(ROOT, "/.tmp/")
}