module.exports = function (gulp, $, conf) {

    gulp.task("build:dev", function () {
        $.runSequence("clean:dev", ["partials:dev", "scripts:dev", "styles:dev"]);
    })
};