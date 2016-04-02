'use strict';

angular.module('kickappApp')
  .controller('MainCtrl', function($scope, $mdBottomSheet, $interval) {
    $scope.mapObject = {
      control: {}
    };
    $scope.onSlideClick = function(iId) {
      //direct to
    };
    $scope.slides = [{
      image: '/assets/images/field1.jpg',
      id: 0
    }, {
      image: '/assets/images/field1.jpg',
      id: 1
    }];
    $scope.fields = [{
      id: 0,
      numberOfSpots: 3,
      name: 'Lakeside Park',
      address: '660 Bellevue Ave, Oakland, CA 94610',
      safety: 3
    }, {
      id: 1,
      numberOfSpots: 5,
      name: 'Shoreside Park',
      address: '610 First Ave, Oakland, CA 93610',
      safety: 2
    }];
    $scope.active = 0;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.clickMarker = function(oEvent) {
      var iMarkerId = oEvent.model.id;
      focusMarker(iMarkerId);
      switchSlideContent(iMarkerId);
      var oNewScope = $scope.$new();
      $mdBottomSheet.show({
        templateUrl: 'app/main/placeMarkerTemplate.html',
        controller: 'MainCtrl',
        scope: oNewScope
      });
      $scope.getSafetyness = function(oField) {
        return new Array(oField.safety);
      };

      oNewScope.$watch('active', function(currentSlide, previousSlide) {
        if (currentSlide !== previousSlide) {
          focusMarker(currentSlide);
          $interval(function() {
            switchSlideContent(currentSlide);
          }, 500, 1);
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
    var switchSlideContent = function(iKey) {
      $scope.selectedField = _.find($scope.fields, function(oField) {
        return oField.id === iKey;
      });
    };
  });