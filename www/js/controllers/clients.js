(function(){
  'use strict';

  angular.module('bc-runner2')

  .controller('ClientsCtrl', function($scope, Client){
    $scope.title = 'Clients';

    Client.all().then(function(response){
      $scope.clients = response.data.clients;
    });
  });
})();
