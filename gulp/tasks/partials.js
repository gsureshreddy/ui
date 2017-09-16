"use strict";

module.exports = function (gulp, $, conf) {

    gulp.task("partials:dev", function () {
        return gulp.src([
            $.path.join(conf.srcRoot, "**/*.html")
        ])
            .pipe(gulp.dest($.path.join(conf.tmpRoot, "partials/")));
    });
};