'use strict';

/**
 * @ngdoc function
 * @name cfsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cfsApp
 */
angular.module('cfs.controllers')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
