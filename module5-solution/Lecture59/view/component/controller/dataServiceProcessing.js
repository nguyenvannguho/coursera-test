(function () {
"use strict";

angular.module('public')
.service('DataServiceProcessing', DataServiceProcessing);

DataServiceProcessing.$inject = ['$http'];
function DataServiceProcessing($http) {
  var service = this;
  service.getShortName = function (short_name) {
    return $http.get('https://dannynguyen-course5.herokuapp.com/menu_items/' + short_name + '.json')
                  .then(function(response){
                    return response.data;
                  }, function(errResponse){
                    return errResponse.status;
                  });
  };
}

})();
