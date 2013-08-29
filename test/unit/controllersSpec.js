'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('checklist.controllers'));

  it('should not have any items on start', inject(function() {
    expect(scope.items.length).toBe(0);
  }));

  it('should not have any items total on start', inject(function() {
    expect(scope.getTotal()).toBe(0);
  }));

  it('should not have any items done on start', inject(function() {
    expect(scope.getDone().toBe(0));
  }));

  ## it should not allow blank items

  ## it should count total items

  ## it should not get counted after it is checked off

  ## it should show percentage completed, rounded off

  ## it should save items into unique URL

  ## it should have a delete button

  ## the delete button should delete the item

  ## it should have an edit button

  ## the edit button should edit the item name


});
