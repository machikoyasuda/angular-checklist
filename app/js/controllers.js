'use strict';

/* Controllers */

angular.module('checklist.controllers', [])
  .controller('AddCtrl', [
    '$scope',
    'angularFire',
    function($scope, angularFire) {
      var url = 'https://mmy-checklist.firebaseio.com/list';
      var promise = angularFire(url, $scope, 'list', {});

      $scope.myVar = "Start your list here.";
      $scope.items = [];
      $scope.addItem = function(){
        $scope.items.push({text:$scope.text});
        $scope.list.items = $scope.items;
        $scope.text = '';
        console.log(JSON.stringify($scope.items));
      }

    promise.then(function() {
      $scope.$watch('list', $scope);
    })

  }]);