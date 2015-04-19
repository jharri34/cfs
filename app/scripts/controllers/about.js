'use strict';

/**
 * @ngdoc function
 * @name cfsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cfsApp
 */
angular.module('cfsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
