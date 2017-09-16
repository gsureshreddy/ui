(function () {

    "use strict";

    angular
        .module("ui")
        .run(runBlock);

    /**
     * @ngInject
     * @param $log
     */
    function runBlock($log) {
        $log.debug("Executing initial logic of UI module");
    }
})();