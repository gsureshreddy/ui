module.exports = function (gulp, $, conf) {

    gulp.task("build:dev", function () {
        $.runSequence("clean:dev", ["partials:dev", "scripts:dev", "styles:dev"]);
    })

    gulp.task("build", function () {
        $.runSequence("clean", ["scripts", "styles"],function () {
            return gulp.src($.path.join(conf.distRoot, "**/*"))
                .pipe($.sizereport({
                    gzip : true
                }));
        });

    })
};