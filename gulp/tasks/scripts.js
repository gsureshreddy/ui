module.exports = function (gulp, $, conf) {

    gulp.task("scripts:dev", function () {
        return gulp.src([
            $.path.join(conf.srcRoot, "**/*.js")
        ])
            .pipe($.angularFilesort())
            .pipe($.concat("ui.js"))
            .pipe($.size())
            .pipe(gulp.dest($.path.join(conf.tmpRoot, "/js/")));
    });

    gulp.task("scripts", function () {
        return gulp.src([
            $.path.join(conf.srcRoot, "**/*.js")
        ])
            .pipe($.angularFilesort())
            .pipe($.concat("ui.js"))
            .pipe(gulp.dest($.path.join(conf.distRoot, "/js/")))
            .pipe($.ngAnnotate())
            .pipe($.uglify())
            .pipe($.rename({ suffix: '.min' }))
            .pipe($.size())
            .pipe(gulp.dest($.path.join(conf.distRoot, "/js/")));
    })
}