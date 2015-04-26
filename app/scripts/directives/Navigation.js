'use strict';

angular.module('cfs.directives').directive('navigation', function () {
    return {
        transclude: true,
        restrict: 'E',
        templateUrl: "views/navigation.html",
        controller: function ($scope, $element) {
            console.log($scope, $element);
            $(window).scroll(function () {
                if ($(document).scrollTop() > 50) {
                    $('nav').addClass('shrink');
                    console.log("foo");
                } else {
                    $('nav').removeClass('shrink');
                    console.log("bar");
                }
            });
        }
    }

});