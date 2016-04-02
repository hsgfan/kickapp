'use strict';

angular.module('kickappApp')
  .controller('InventoryCtrl', function($scope, $http, $location, $stateParams, $window) {
    var fieldId = 1;
    $scope.inventory = {};
    $scope.name = '';

    $scope.reserve = function() {
      $location.path('/client/app/reserve/reserve.html');
    };
    $http.get('/api/inventories/' + fieldId).success(function(inventoryData) {
      $scope.inventory = inventoryData[$scope.$index];
    });

    var iId = $stateParams.fieldId;
    console.log(iId);
    $scope.getSafetyness = function(selectedField) {
      return new Array(4);
    };
    $scope.onBackButtonClick = function() {
      $window.history.back();
    };
  });
