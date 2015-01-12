(function(){
  'use strict';

  angular.module('bc-runner2')

  .controller('AccountCtrl', function($scope, $rootScope, $ionicModal, $state, User){
    $scope.user = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal){
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function(){
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function(){
      $scope.modal.show();
    };

    $scope.doLogout = function(){
      User.logout().then(function(){
        $rootScope.rootuser = null;
        $state.go('app.home');
      });
    };

    $scope.doLogin = function(){
      User.login($scope.user).then(function(response){
        $rootScope.rootuser = response.data;
        $state.go('app.home');
        $scope.closeLogin();
        $scope.user = {};
      }, function(){
        $scope.user = {};
      });
    };
  });
})();
