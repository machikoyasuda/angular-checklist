'use strict';

// Declare app level module which depends on filters, and services
angular.module('checklist',
  [
    'firebase',
    'checklist.controllers'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/create', {templateUrl: 'partials/create.html', controller: 'ItemCtrl'});
    $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ItemCtrl'});
    $routeProvider.otherwise({redirectTo: '/create'});
  }]);