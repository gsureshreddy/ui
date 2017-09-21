(function () {

    "use strict";

    angular
        .module("ui.components", [
            "ui.core"
        ]);
})();
(function ()
{
    'use strict';

    angular
        .module('ui.components')
        .directive('uiSplashScreen', uiSplashScreenDirective);

    /** @ngInject */
    function uiSplashScreenDirective()
    {
        return {
            restrict: 'E',
            link    : function (scope, iElement)
            {
                console.log('splash screen directive');
            }
        };
    }
})();
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
(function () {

    "use strict";

    angular
        .module("ui.core", []);
})();
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
(function () {

    "use strict";

    angular
        .module("ui", [
            "ui.core",
            "ui.components"
        ]);
})();
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