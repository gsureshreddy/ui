module.exports = function (gulp, $, conf) {

    var injectOptions = {
        addRootSlash : false
    }

    gulp.task("inject:docs",["styles:dev","scripts:dev", "partials:dev"], function () {

        var injectStyles = gulp.src([
            $.path.join(conf.tmpRoot, 'css/**/*.css')
        ], {read: false});

        var injectScripts = gulp.src([
            $.path.join(conf.srcRoot, "**/*.js")
        ])
            .pipe($.angularFilesort());

        return gulp.src([$.path.join(conf.docsRoot, "*.html")])
            .pipe($.inject(injectStyles, injectOptions))
            .pipe($.inject(injectScripts, injectOptions))
            .pipe($.wiredep($._.extend({}, conf.wiredep)))
            .pipe(gulp.dest($.path.join(conf.tmpRoot)));
    });
}