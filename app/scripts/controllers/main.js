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
        var directionsService;
        var directionsDisplay;


        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(33.5250, -86.8130)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();

        var input = $('#input');
        var autocomplete = new google.maps.places.Autocomplete(input[0]);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input[0]);
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('directions-panel'));


        $scope.getDirections = function () {
            var start = $('#input').val();
            var end = new google.maps.LatLng(33.506117, -86.803178);
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        }

        $('#input').keyup(function (ev) {
            if (ev.which === 13) {
                $scope.getDirections();
                
            }
        });


    });