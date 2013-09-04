'use strict';

// Declare app level module which depends on filters, and services
angular.module('checklist',
  [
    'firebase',
    'checklist.controllers'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/create.html', controller: 'ItemCtrl'});
    $routeProvider.when('/list/:currentList', {templateUrl: 'views/list.html', controller: 'ItemCtrl'});
    $routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'ItemCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);