'use strict';

/* Controllers */

angular.module('checklist.controllers', [])
  .controller('ItemCtrl', [
    '$scope',
    'angularFire',
    '$routeParams',
    function($scope, angularFire, $routeParams) {
      var url = 'https://mmy-checklist.firebaseio.com/list';
      var promise = angularFire(url, $scope, 'list', [{items: [{text:"start", status:false}]}]);

      promise.then(function(){
        $scope.newList = 0;
        $scope.currentList = $routeParams.currentList;

        // Create new list and add first item
        $scope.createList = function(){
          if($scope.text != null){
            // TO DO: Fix validation - do not allow empty items
            alert("Your group checklist is created!");
            console.log($scope.text);
            $scope.list.push({items: [{text:$scope.text, status:false}]});
            $scope.currentList = $scope.list.length-1;
          }
          $scope.text = '';
        }

        // Add more items with button click, view items
        // Validate: Do not accept empty items
        $scope.addItem = function(){
          if($scope.newItem){
            $scope.list[$scope.currentList].items.push({text:$scope.newItem, status:false});
          }
          $scope.newItem = '';
        }

        // Delete a particular item with button click
        $scope.deleteItem = function(){
          $scope.list[$scope.currentList].items.splice(this.$index,1);
        }

        // Calculate list status
        $scope.getTotal = function(){
          return $scope.list[$scope.currentList].items.length;
        }

        $scope.getRemaining = function(){
          var count = 0;
          $scope.list[$scope.currentList].items.forEach (function(item, index, items){
            if(!item.status){
              count = count + 1;
            }
          });
          return count
        }

        $scope.getDone = function(){
          var count = 0;
          $scope.list[$scope.currentList].items.forEach (function(item, index, items){
            if(item.status){
              count = count + 1;
            }
          });
          return count
        }

        $scope.getPercent = function(){
          if ($scope.list[$scope.currentList].items.length != 0) {
            var percent = 100 * ($scope.getDone()/$scope.getTotal());
            return Math.round(percent) + "%";
          }
        }

        $scope.getDecimal = function(){
          if ($scope.list[$scope.currentList].items.length !=0) {
            var decimal = ($scope.getDone()/$scope.getTotal());
            return Math.round(decimal * 10)/10;
          }
        }
      })
  }]);