(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['StoreDataService'];
function MyInfoController(StoreDataService) {
  var info = this;
  info.existRegister = StoreDataService.checkDataRegister();

  if(info.existRegister) {
    var data = StoreDataService.getDataRegister();
    info.firstName = data.firstName;
    info.lastName = data.lastName;
    info.email = data.email;
    info.phone = data.phone;
    info.shortName = data.shortName;
    info.dataShortName = data.dataShortName;
  }
  //var dataRegister = StoreDataService

}

})();
