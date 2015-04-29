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
            center: new google.maps.LatLng(33.5250, -86.8130)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var input = $('#input');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input[0]);
        var autocomplete = new google.maps.places.Autocomplete(input[0]);
        

    });