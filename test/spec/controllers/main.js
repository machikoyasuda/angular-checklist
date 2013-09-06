(function () {
  'use strict';

  describe('Item Controller for each checklist', function () {
    var ctrl, scope;

    // Load the module containing the app
    beforeEach(module('checklist'));

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('ItemCtrl', {$scope: scope});
    }));

    it('should run the test', function () {
      expect(true).toBe(true);
    });

    it('should have at least one item in list', function() {
      expect(scope.list.length).toBeTruthy();
    });

    describe('having multiple items in checklist', function() {
      var checkList,
        listStorage = {
          storage: {},
          get: function() {
            return this.storange;
          },
          put: function() {
            this.storange = value;
          }
        };

      beforeEach(inject(function($controller) {
        checkList = [{
                        "items" : [ {
                          "text" : "Backpack",
                          "status" : true
                        }, {
                          "text" : "Thermos",
                          "status" : true
                        }, {
                          "text" : "Coffee maker",
                          "status" : true
                        }, {
                          "text" : "Coffee grinder",
                          "status" : true
                        }, {
                          "text" : "Coffee",
                          "status" : false
                        }, {
                          "text" : "Breakfast oatmeal",
                          "status" : false
                        }, {
                          "text" : "Lunch burrito",
                          "status" : false
                        }, {
                          "text" : "Dinner soup",
                          "status" : false
                        } ]
                      }]

        listStorage.storage = checkList;
        ctrl = $controller('ItemCtrl', {
          $scope: scope,
          listStorage: listStorage
        });
        scope.$digest();
      }));

      it('should count list items correctly', function() {
        expect(scope.list.length).toBe(8);
        expect(scope.list.getTotal).toBe(8);
        expect(scope.list.getRemaining).toBe(4);
        expect(scope.list.getDone).toBe(4);
        expect(scope.list.getPercent).toBe(50);
      })
    })
  });
}());