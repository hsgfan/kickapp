'use strict';

describe('Controller: ReserveCtrl', function () {

  // load the controller's module
  beforeEach(module('kickappApp'));

  var ReserveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReserveCtrl = $controller('ReserveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
