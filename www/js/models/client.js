(function(){
  'use strict';

  angular.module('bc-runner2')
  .factory('Client', function($http, origin){

    function all(){
      return $http.get(origin + '/clients');
    }

    function findById(id){
      return $http.get(origin + '/clients/' + id);
    }

    function addPhoto(id, buf){
      return $http.post(origin + '/clients/' + id + '/photo', {buf: buf});
    }

    return {all:all, findById:findById, addPhoto:addPhoto};
  });
})();
