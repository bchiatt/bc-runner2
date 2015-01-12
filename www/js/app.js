(function(){
  'use strict';

  angular.module('bc-runner2', ['ionic'])

  .run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
      if (window.cordova && window.cordova.plugins.Keyboard){
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar){
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AccountCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('app.clients', {
      url: '/clients',
      views: {
        'menuContent': {
          templateUrl: 'templates/clients.html',
          controller: 'ClientsCtrl'
        }
      }
    })

    .state('app.client', {
      url: '/clients/{clientId}',
      views: {
        'menuContent': {
          templateUrl: 'templates/client.html',
          controller: 'ClientCtrl'
        }
      }
    })

    .state('app.therapists', {
      url: '/therapists',
      views: {
        'menuContent': {
          templateUrl: 'templates/therapists.html',
          controller: 'TherapistsCtrl'
        }
      }
    })

    .state('app.therapist', {
      url: '/therapists/{therapistId}',
      views: {
        'menuContent': {
          templateUrl: 'templates/therapist.html',
          controller: 'TherapistCtrl'
        }
      }
    });
    $urlRouterProvider.otherwise('/app/home');
  })
  // #todo only used during development; remove for production
  .run(['$rootScope', '$http', 'origin', function($rootScope, $http, origin){
    $http.get(origin + '/status').then(function(response){
      $rootScope.rootuser = response.data;
    }, function(){
      $rootScope.rootuser = null;
    });
  }]);
})();
