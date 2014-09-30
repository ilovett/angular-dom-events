(function(window, angular, undefined) {

  'use strict';

  angular.module('ngDomEvents', [])
    /**
     * @ngdoc directive
     * @name ngDomEvents.directive:domOnCreate
     * @description
     * # domOnCreate
     */
    .directive('domOnCreate', function($parse, $timeout) {
      return {
        link: function postLink(scope, element, attrs) {
          // wrap in a timeout to allow directives to link scope callbacks
          $timeout(function() {
            if (attrs.domOnCreate) {
              $parse(attrs.domOnCreate)(scope);
            }
          });
        }
      };
    })
    /**
     * @ngdoc directive
     * @name ngDomEvents.directive:domOnDestroy
     * @description
     * # domOnDestroy
     */
    .directive('domOnDestroy', function($parse) {
      return {
        link: function postLink(scope, element, attrs) {
          var destroyHandler;
          if (attrs.domOnDestroy) {
            destroyHandler = $parse(attrs.domOnDestroy);
            element.on('$destroy', function() {
              destroyHandler(scope);
            });
          }
        }
      };
    })

})(window, window.angular);
