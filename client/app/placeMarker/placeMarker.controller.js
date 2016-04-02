'use strict';

angular.module('kickappApp')
  .controller('PlaceMarkerCtrl', function($scope) {
    $scope.message = 'Hello';
    $scope.onSlideClick = function() {
      debugger;
    };
    $scope.$watch('active', function(currentSlide, previousSlide) {
      if (currentSlide !== previousSlide) {
        console.log('currentSlide:', currentSlide);
      }
    });
  });