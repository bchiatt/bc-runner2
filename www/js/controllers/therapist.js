(function(){
  'use strict';

  angular.module('bc-runner2')

  .controller('TherapistCtrl', function($scope, $state, Therapist){
    var therapistId = $state.params.therapistId;
    getTherapist();

    function getTherapist(){
      Therapist.findById(therapistId).then(function(response){
        $scope.therapist = response.data.therapist;
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
      Therapist.addPhoto(therapistId, b64).then(function(response){
        getTherapist();
      });
    }

    function error(msg){
      console.log(msg);
    }
  });
})();
