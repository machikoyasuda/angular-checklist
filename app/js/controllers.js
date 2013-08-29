'use strict';

/* Controllers */

angular.module('checklist.controllers', [])
  .controller('ItemCtrl', [
    '$scope',
    'angularFire',
    function($scope, angularFire) {
      var url = 'https://mmy-checklist.firebaseio.com/list';
      var promise = angularFire(url, $scope, 'list', {items: []});

      promise.then(function(){
        $scope.addItem = function(){
          if($scope.text){
            $scope.list.items.push({text:$scope.text, status:false});
          }
          $scope.text = '';
        }

        $scope.deleteItem = function(){
          $scope.list.items.splice(this.$index,1);
        }

        $scope.getTotal = function(){
          return $scope.list.items.length;
        }

        $scope.getRemaining = function(){
          var count = 0;
          $scope.list.items.forEach (function(item, index, items){
            if(!item.status){
              count = count + 1;
            }
          });
          return count
        }

        $scope.getDone = function(){
          var count = 0;
          $scope.list.items.forEach (function(item, index, items){
            if(item.status){
              count = count + 1;
            }
          });
          return count
        }

        $scope.getPercent = function(){
          if ($scope.list.items.length != 0) {
            var percent = 100 * ($scope.getDone()/$scope.getTotal());
            return Math.round(percent) + "%";
          }
        }

        $scope.getDecimal = function(){
          if ($scope.list.items.length !=0) {
            var decimal = ($scope.getDone()/$scope.getTotal());
            return Math.round(decimal * 10)/10;
          }
        }
      })
  }]);