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