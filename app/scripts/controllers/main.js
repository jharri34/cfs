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
  });
