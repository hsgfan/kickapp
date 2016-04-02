'use strict';

angular.module('kickappApp')
  .controller('InventoryCtrl',function($scope,$http){
    var fieldId=1;
    $scope.inventory={};
    $scope.name='';

    $scope.reserve=function($scope){
      debugger;
      $location.path('/client/app/reserve/reserve.html');
    };
    $http.get('/api/inventories/' + fieldId).success(function(inventoryData) {
      $scope.inventory = inventoryData[$scope.$index];
    });



  });
