'use strict';

angular.module('kickappApp')
  .controller('MainCtrl', function($scope, $mdBottomSheet) {
    $scope.clickMarker = function() {
      $mdBottomSheet.show({
        options: {
          disableBackdrop: true
        },
        template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
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