'use strict';

angular.module('kickappApp')
  .controller('InventoryCtrl', function($scope, $stateParams) {
    var iId = $stateParams.fieldId;
    console.log(iId);
    $scope.getSafetyness = function(selectedField) {
      return new Array(3);
    }
  });