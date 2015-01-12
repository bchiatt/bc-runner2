(function(){
  'use strict';

  angular.module('bc-runner2')
  .factory('Time', [function(){

    function isoDate(pgDate){
      return pgDate.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)[0];
    }

    return {isoDate:isoDate};
  }]);
})();
