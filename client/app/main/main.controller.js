'use strict';

angular.module('kickappApp')
  .controller('MainCtrl', function($scope, $mdBottomSheet, $interval, $state) {
    $scope.mapObject = {
      control: {}
    };
    $scope.onSlideClick = function(iId) {
      console.log(iId);
      $state.go('inventory', {
        fieldId: iId
      });
      //direct to
    };
    $scope.slides = [{
      image: '/assets/images/field1.jpg',
      id: 0
    }, {
      image: '/assets/icons/field3.jpeg',
      id: 1
    }];
    $scope.fields = [{
      id: 0,
      numberOfSpots: 3,
      name: 'Baldium Sports',
      address: '800 W Tower Ave, Oakland, CA 94501',
      safety: 4
    }, {
      id: 1,
      numberOfSpots: 5,
      name: 'Alameda Point',
      address: 'Lexington St, Alameda, CA 94501',
      safety: 1
    }, {
      id: 1,
      numberOfSpots: 5,
      name: 'Mainstreet Soccer Field',
      address: '2040 Main St, Alameda, CA 94501',
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
        latitude: 37.7843682,
        longitude: -122.2993357
      },
      pan: true,
      zoom: 15,
      options: {
        disableDefaultUI: true
      }
    };
    $scope.markers = [{
      id: 0,
      latitude: 37.7829132,
      longitude: -122.3033027,
      icon: 'assets/icons/group1.png'
    }, {
      id: 1,
      latitude: 37.7875747,
      longitude: -122.3048281,
      icon: 'assets/icons/group.png'
    }, {
      id: 2,
      latitude: 37.7787161,
      longitude: -122.2930483,
      icon: 'assets/icons/group4.png'
    }];
    var focusMarker = function(iKey) {
      if (typeof $scope.oFocusMarker !== 'undefined') {
        $scope.oFocusMarker.icon = 'assets/icons/group1.png';
      }
      $scope.oFocusMarker = _.find($scope.markers, function(oMarker) {
        return oMarker.id === iKey;
      });
      $scope.oFocusMarker.icon = 'assets/icons/group.png';
    };
    var switchSlideContent = function(iKey) {
      $scope.selectedField = _.find($scope.fields, function(oField) {
        return oField.id === iKey;
      });
    };
  });