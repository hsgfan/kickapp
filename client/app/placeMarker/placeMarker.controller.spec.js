'use strict';

describe('Controller: PlaceMarkerCtrl', function () {

  // load the controller's module
  beforeEach(module('kickappApp'));

  var PlaceMarkerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaceMarkerCtrl = $controller('PlaceMarkerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
