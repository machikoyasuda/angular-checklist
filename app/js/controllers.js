'use strict';

/* Controllers */

angular.module('checklist.controllers', [])
  .controller('ItemCtrl', [
    '$scope',
    'angularFire',
    function($scope, angularFire) {
      var url = 'https://mmy-checklist.firebaseio.com/list';
      var promise = angularFire(url, $scope, 'list', {});

      $scope.items = [];
      $scope.addItem = function(){
        if($scope.text){
          $scope.items.push({text:$scope.text, status:false});
        }
        $scope.list.items = $scope.items;
        $scope.text = '';
        console.log(JSON.stringify($scope.items));
        console.log($scope.items.length);
        console.log($scope.items.length);
      }

      $scope.getTotal = function(){
        return $scope.items.length;
      }

      $scope.getRemaining = function(){
        var count = 0;
        $scope.items.forEach (function(item, index, items){
          if(!item.status){
            count = count + 1;
          }
        });
        return count
      }

      $scope.getDone = function(){
        var count = 0;
        $scope.items.forEach (function(item, index, items){
          if(item.status){
            count = count + 1;
          }
        });
        return count
      }

      $scope.getPercent = function(){
        if ($scope.items.length != 0) {
          console.log($scope.items);
          var percent = 100 * ($scope.getDone()/$scope.getTotal());
          return Math.round(percent) + "%";
        }
      }

      $scope.getDecimal = function(){
        if ($scope.items) {
          console.log($scope.items);
          var decimal = ($scope.getDone()/$scope.getTotal());
          return Math.round(decimal);
        }
      }

    promise.then(function() {
        console.log(JSON.stringify($scope.items));
    })

  }]);