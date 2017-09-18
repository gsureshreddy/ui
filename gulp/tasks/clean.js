module.exports = function (gulp, $, conf) {

    "use strict";

    gulp.task("clean:dev", function () {
        console.log("cleaning development folder" + conf.buildRoot);
        $.del([conf.buildRoot, conf.tmpRoot]);
        return;
    });

    gulp.task("clean", function () {
        console.log("cleaning development folder" + conf.distRoot);
        $.del([conf.distRoot]);
        return;
    });
}