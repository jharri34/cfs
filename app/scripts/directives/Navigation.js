'use strict';

angular.module('cfs.directives').directive('navigation', function () {
    return {
        transclude: true,
        restrict: 'E',
        templateUrl: "views/navigation.html"
    }

});