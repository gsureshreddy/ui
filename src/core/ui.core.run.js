(function () {

    "use strict";

    angular
        .module("ui.core")
        .run(runBlock);

    /**
     * @ngInject
     * @param $log
     */
    function runBlock($log) {
        $log.debug("Executing initilizing block for ui.core");
    }
})();