'use strict';

angular.module('kickappApp')
  .controller('MainCtrl', function($scope, $mdBottomSheet) {
    $scope.mapObject = {
      control: {}
    };
    $scope.slides = [{
      image: '/assets/images/field1.jpg',
      id: 0
    }, {
      image: '/assets/images/field1.jpg',
      id: 1
    }];
    $scope.active = 0;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.clickMarker = function(oEvent) {
      focusMarker(oEvent.key);
      var oNewScope = $scope.$new();
      $mdBottomSheet.show({
        templateUrl: 'app/main/placeMarkerTemplate.html',
        controller: 'MainCtrl',
        disableBackdrop: true,
        scope: oNewScope
      });

      oNewScope.$watch('active', function(currentSlide, previousSlide) {
        if (currentSlide !== previousSlide) {
          focusMarker(currentSlide);
        }
      });

    };
    $scope.map = {
      center: {
        latitude: 37.8152684,
        longitude: -122.2922745
      },
      pan: true,
      zoom: 15,
      options: {
        disableDefaultUI: true
      }
    };

    $scope.markers = [{
      id: 0,
      latitude: 37.8152684,
      longitude: -122.2922745,
      icon: 'assets/icons/unavailable-marker.png'
    }, {
      id: 1,
      latitude: 37.8122662,
      longitude: -122.2895987,
      icon: 'assets/icons/unavailable-marker.png'
    }];
    var focusMarker = function(iKey) {
      if (typeof $scope.oFocusMarker !== 'undefined') {
        $scope.oFocusMarker.icon = 'assets/icons/unavailable-marker.png';
      }
      $scope.oFocusMarker = _.find($scope.markers, function(oMarker) {
        return oMarker.id === iKey;
      });

      $scope.oFocusMarker.icon = 'assets/icons/available-marker.png';
    };
  });