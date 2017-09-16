(function () {

    "use strict";

    angular
        .module("ui.components")
        .run(runBlock);

    /**
     * @ngInject
     * @param $log
     */
    function runBlock($log) {
        $log.debug("Executing initilizing block for ui.components");
    }
})();