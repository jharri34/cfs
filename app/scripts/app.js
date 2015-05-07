'use strict';

/**
 * @ngdoc overview
 * @name cfsApp
 * @description
 * # cfsApp
 *
 * Main module of the application.
 */
angular
  .module('cfs', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'cfs.directives',
    'cfs.controllers'
  ]);
angular.module('cfs.controllers',[]);
angular.module('cfs.directives',[]);
