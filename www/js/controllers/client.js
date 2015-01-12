(function(){
  'use strict';

  angular.module('bc-runner2')

  .controller('ClientCtrl', function($scope, $state, $timeout, Client, Time){
    var clientId = $state.params.clientId;
    getClient();


    function getClient(){
      Client.findById(clientId).then(function(response){
        $scope.client = response.data.client;
      });
    }

    $scope.snap = function(){
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
      };

      navigator.camera.getPicture(success, error, options);
    };

    $scope.choose = function(){
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      };

      navigator.camera.getPicture(success, error, options);
    };

    function success(b64){
      Client.addPhoto(clientId, b64).then(function(response){
        $timeout(getClient(), 4000);
      });
    }

    function error(msg){
      console.log(msg);
    }

    $scope.dateMoDaYr = function(iso8601){
      if(!iso8601){return;}
      return moment(Time.isoDate(iso8601)).format('MMM D, YYYY');
    };
  });
})();
