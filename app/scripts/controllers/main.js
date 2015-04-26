'use strict';

/**
 * @ngdoc function
 * @name cfsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cfsApp
 */
angular.module('cfs.controllers')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


        var map;


            var mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(-34.397, 150.644)
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);


    });