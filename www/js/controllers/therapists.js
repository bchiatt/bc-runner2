(function(){
  'use strict';

  angular.module('bc-runner2')

  .controller('TherapistsCtrl', function($scope, Therapist){
    $scope.title = 'Therapists';

    Therapist.all().then(function(response){
      $scope.therapists = response.data.therapists;
    });
  });
})();
