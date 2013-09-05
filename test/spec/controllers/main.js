(function () {
  'use strict';

  describe('checklist', function () {
    var ctrl, scope;

    // Load the module containing the app, only 'ng' is loaded by default.
    beforeEach(module('checklist'));

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('ItemCtrl', {$scope: scope});
    }));

    it('expect test to run', function () {
      expect(true).toBe(true);3
    });

  });
}());