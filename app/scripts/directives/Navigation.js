'use strict';

angular.module('cfs.directives').directive('navigation', function () {
    return {
        transclude: true,
        restrict: 'E',
        templateUrl: "views/navigation.html",
        controller: function ($scope, $element) {
            $(window).scroll(function () {
                
                if ($(document).scrollTop() > 100) {
                    $('nav').addClass('shrink');
                } else {
                    $('nav').removeClass('shrink');
                }
            });
        }
    }

});