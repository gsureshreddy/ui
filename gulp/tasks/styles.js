module.exports = function (gulp, $, conf) {

    gulp.task("styles:dev", function () {
        return gulp.src([
            $.path.join(conf.srcRoot, "sass/includes/variables.scss"),
            $.path.join(conf.srcRoot, "sass/mixins/**/*.scss"),
            $.path.join(conf.srcRoot, "sass/**/*.scss"),
            $.path.join(conf.srcRoot, "components/**/*.scss")
        ])
            .pipe($.concat("ui.scss"))
            .pipe(gulp.dest($.path.join(conf.tmpRoot, "scss/")))
            .pipe($.sass())
            .pipe(gulp.dest($.path.join(conf.tmpRoot, "css/")));
    });

    gulp.task("styles", function () {

    })
};