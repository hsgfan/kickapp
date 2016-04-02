'use strict';

var app = angular.module('kickappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ngMessages',
  'ui.router',
  'ngMaterial',
  'uiGmapgoogle-maps',
  'ui.bootstrap'
]);

app.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('action', '../assets/iconsets/action-icons.svg', 24)
    .iconSet('alert', '../assets/iconsets/alert-icons.svg', 24)
    .iconSet('av', '../assets/iconsets/av-icons.svg', 24)
    .iconSet('communication', '../assets/iconsets/communication-icons.svg', 24)
    .iconSet('content', '../assets/iconsets/content-icons.svg', 24)
    .iconSet('device', '../assets/iconsets/device-icons.svg', 24)
    .iconSet('editor', '../assets/iconsets/editor-icons.svg', 24)
    .iconSet('file', '../assets/iconsets/file-icons.svg', 24)
    .iconSet('hardware', '../assets/iconsets/hardware-icons.svg', 24)
    .iconSet('icons', '../assets/iconsets/icons-icons.svg', 24)
    .iconSet('image', '../assets/iconsets/image-icons.svg', 24)
    .iconSet('maps', '../assets/iconsets/maps-icons.svg', 24)
    .iconSet('navigation', '../assets/iconsets/navigation-icons.svg', 24)
    .iconSet('notification', '../assets/iconsets/notification-icons.svg', 24)
    .iconSet('social', '../assets/iconsets/social-icons.svg', 24)
    .iconSet('toggle', '../assets/iconsets/toggle-icons.svg', 24)
    .iconSet('avatar', '../assets/iconsets/avatar-icons.svg', 128);
});
app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push('authInterceptor');
});

app.config(function($mdGestureProvider) {
  $mdGestureProvider.skipClickHijack();
});

app.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    // key: 'your api key',
    v: '3.20', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  });
});

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('blue')

})

  app.config(function ($stateProvider) {
    $stateProvider
      .state('inventory', {
        url: '/inventory',
        templateUrl: 'app/inventory/inventory.html',
        controller: 'InventoryCtrl'
      });

  });


app.directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'app/carouselOverride.tpl.html',
    scope: {
      interval: '=',
      noTransition: '=',
      noPause: '='
    }
  };
}]);

app.factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
  return {
    // Add authorization token to headers
    request: function(config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      if (response.status === 401) {
        $location.path('/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      } else {
        return $q.reject(response);
      }
    }
  };
});

app.run(function($rootScope, $location, Auth) {
  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('$stateChangeStart', function(event, next) {
    Auth.isLoggedInAsync(function(loggedIn) {
      if (next.authenticate && !loggedIn) {
        event.preventDefault();
        $location.path('/login');
      }
    });
  });
});
