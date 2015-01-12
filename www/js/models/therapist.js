(function(){
  'use strict';

  angular.module('bc-runner2')
  .factory('Therapist', function($http, origin){

    function all(){
      return $http.get(origin + '/therapists');
    }

    function findById(id){
      return $http.get(origin + '/therapists/' + id);
    }

    function addPhoto(id, buf){
      return $http.post(origin + '/therapists/' + id + '/photo', {buf: buf});
    }

    return {all:all, findById:findById, addPhoto:addPhoto};
  });
})();
