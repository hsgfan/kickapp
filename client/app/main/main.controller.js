'use strict';

angular.module('kickappApp')
  .controller('MainCtrl', function($scope, $mdBottomSheet) {
    $scope.clickMarker = function() {
      var oNewScope = $scope.$new();
      oNewScope.place = 'test';
      $mdBottomSheet.show({
        templateUrl: 'app/placeMarker/placeMarkerTemplate.html',
        controller: 'PlaceMarkerCtrl',
        disableBackdrop: true,
        scope: oNewScope
      });

    };
    $scope.map = {
      center: {
        latitude: 37.8152684,
        longitude: -122.2922745
      },
      zoom: 15,
      options: {
        disableDefaultUI: true
      }
    };
    $scope.marker = {
      options: {
        optimized: false
      }
    };

  });