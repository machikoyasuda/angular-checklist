'use strict';

// Declare app level module which depends on filters, and services
angular.module('checklist',
  [
    'firebase',
    'checklist.controllers'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/create.html', controller: 'ItemCtrl'});
    $routeProvider.when('/list/:currentList', {templateUrl: 'partials/list.html', controller: 'ItemCtrl'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'ItemCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);