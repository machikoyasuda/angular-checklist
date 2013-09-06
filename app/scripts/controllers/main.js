'use strict';

/* Controllers */

angular.module('checklist.controllers', [])
  .controller('CreateCtrl', ['$scope', '$location', '$routeParams', 'firebaseFactory',
    function($scope, $location) {
      // Create new list and add first item
      $scope.createList = function(){
        if($scope.text){
          $scope.list.push({items: [{text:$scope.text, status:false}]});
          if( $scope.list.length > 0){
          $scope.currentList = $scope.list.length-1
          } else {
            $scope.currentList = 0;
          }
          // console.log($scope.currentList);
          console.log($location.path)
          $location.path('/list/' + $scope.currentList);
          alert('Your URL is: ' + $location.absUrl());
          return false;
        }
        $scope.text = '';
      };
    }])
  .controller('ItemCtrl', ['$scope', 'firebaseFactory','angularFire', '$location', '$routeParams',
    function($scope, firebaseFactory, angularFire, $location, $routeParams) {
      var url = 'https://mmy-checklist.firebaseio.com/list';
      var promise = angularFire(url, $scope, "list", [{items: [{text:'start', status:false}]}]);

      promise.then(function(){
        $scope.newList = 0;
        $scope.currentList = $routeParams.currentList;
        // console.log($scope.list)
        // console.log($routeParams.currentList)
        // console.log($scope.list[$scope.currentList])

        // Go to About page
        $scope.goAbout = function (){
          $location.path('/about');
        };

        // Add more items with button click, view items
        // Validate: Do not accept empty items
        $scope.addItem = function(){
          // console.log($scope.newItem);
          // console.log($scope.currentList);
          if($scope.newItem){
            $scope.list[$scope.currentList].items.push({text:$scope.newItem, status:false});
          }
          $scope.newItem = '';
        };

        // Delete a particular item with button click
        $scope.deleteItem = function(){
          $scope.list[$scope.currentList].items.splice(this.$index,1);
        };

        // Calculate list status
        $scope.getTotal = function(){
          return $scope.list[$scope.currentList].items.length;
        };

        $scope.getRemaining = function(){
          var count = 0;
          $scope.list[$scope.currentList].items.forEach (function(item){
            if(!item.status){
              count = count + 1;
            }
          });
          return count;
        };

        $scope.getDone = function(){
          var count = 0;
          $scope.list[$scope.currentList].items.forEach (function(item){
            if(item.status){
              count = count + 1;
            }
          });
          return count;
        };

        $scope.getPercent = function(){
          if ($scope.list[$scope.currentList].items.length !== 0) {
            var percent = 100 * ($scope.getDone()/$scope.getTotal());
            return Math.round(percent) + '%';
          }
        };

        $scope.getDecimal = function(){
          if ($scope.list[$scope.currentList].items.length !==0) {
            var decimal = ($scope.getDone()/$scope.getTotal());
            return Math.round(decimal * 10)/10;
          }
        };
      });
    }]);