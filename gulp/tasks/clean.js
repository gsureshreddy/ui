module.exports = function (gulp, $, conf) {

    "use strict";

    gulp.task("clean:dev", function () {
        console.log("cleaning development folder" + conf.buildRoot);
        return $.del([conf.buildRoot, conf.tmpRoot]);
    });

    gulp.task("clean", function () {
        console.log("cleaning development folder" + conf.distRoot);
        return $.del([conf.distRoot]);
    });
}