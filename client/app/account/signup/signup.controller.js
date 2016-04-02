'use strict';

angular.module('kickappApp')
  .controller('SignupCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};
    $scope.genders = ['Male','Female','Wish not to disclose'];
    $scope.selectedGender='';
    $scope.preferredLocations = ['Oakland'];
    $scope.getSelectedGender = function() {
      if ($scope.selectedGender !== undefined) {
        $scope.user.model.gender=$scope.selectedGender;
      } else {
        return "Please select a Gender";
      }
    };

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          gender: $scope.user.gender,
          skill:$scope.user.skill,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.clicked =function(form){
      $scope.register(form);
      $location.path('/client/components/shell/shell.html');
    };

  });
