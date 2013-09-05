'use strict';

angular.module('checklist.services', [])
  .service('firebaseFactory', ['angularFire', function(angularFire){ return {
    link: function(scope, variable, type){
      var url = 'https://mmy-checklist.firebaseio.com/list';
      return angularFire(url, scope, variable, type);
    }}
  }]);