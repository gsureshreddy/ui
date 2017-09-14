var args = require('minimist')(process.argv.slice(2));
var VERSION = args.version || require('../package.json').version;

module.exports = {
    version         : VERSION,
    jsBaseFiles     : [],
    jsFiles         : []
}