module.exports = function (gulp, $, conf) {

    function browserSyncInit(baseDir, browser)
    {
        browser = browser === undefined ? 'default' : browser;

        var routes = null;
        if ( baseDir === conf.srcRoot || ($.util.isArray(baseDir) && baseDir.indexOf(conf.srcRoot) !== -1) )
        {
            routes = {
                '/bower_components': 'bower_components'
            };
        }

        var server = {
            baseDir: baseDir,
            routes : routes
        };

        /*
         * You can add a proxy to your backend by uncommenting the line below.
         * You just have to configure a context which will we redirected and the target url.
         * Example: $http.get('/users') requests will be automatically proxified.
         *
         * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
         */
        // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});

        $.browserSync.instance = $.browserSync.init({
            startPath: '/',
            server   : server,
            browser  : browser
        });
    }

    $.browserSync.use($.browserSyncSpa({
        selector: '[ng-app]'// Only needed for angular apps
    }));

    gulp.task('serve:docs', ['watch:dev'], function ()
    {
        browserSyncInit([conf.tmpRoot, conf.srcRoot, conf.rootDir, $.path.join(conf.tmpRoot, "partials/")]);
    });
}