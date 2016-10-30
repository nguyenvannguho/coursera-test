(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['DataServiceProcessing', 'StoreDataService', '$scope'];
function SignUpController(DataServiceProcessing, StoreDataService, $scope) {
  var signup = this;
  signup.firstName = '';
  signup.lastName = '';
  signup.email = '';
  signup.phone = '';
  signup.shortName = '';
  signup.dataShortName = '';
  signup.showErrorShortName = false;
  signup.submitSuccess = false;

  signup.initialize = function () {
    if (StoreDataService.checkDataRegister() === true) {
      var data = StoreDataService.getDataRegister();
      signup.firstName = data.firstName;
      signup.lastName = data.lastName;
      signup.email = data.email;
      signup.phone = data.phone;
      signup.shortName = data.shortName;
      signup.dataShortName = data.dataShortName;
    }
  };
  signup.loseFocus = function () {
    DataServiceProcessing.getShortName(signup.shortName).then(function(data) {
      if(data === 404 || data === 500) {
        signup.showErrorShortName = true;
      } else {
        signup.showErrorShortName = false;
        signup.dataShortName = '';
        signup.dataShortName = data;
        console.log("lose Focus: " + signup.dataShortName);
      }
    });
  };

  signup.submit = function () {
    if (signup.dataShortName !== '') {
      StoreDataService.saveDataRegister(signup.firstName,
                                        signup.lastName,
                                        signup.email,
                                        signup.phone,
                                        signup.shortName,
                                        signup.dataShortName)
      signup.submitSuccess = true;
    } else {
      DataServiceProcessing.getShortName(signup.shortName).then(function(data) {
        if(data === 404 || data === 500 || data === -1) {
          signup.showErrorShortName = true;
        } else {
          signup.showErrorShortName = false;
          signup.dataShortName = '';
          signup.dataShortName = data;
          console.log("Submit: " + signup.dataShortName);

          StoreDataService.saveDataRegister(signup.firstName,
                                            signup.lastName,
                                            signup.email,
                                            signup.phone,
                                            signup.shortName,
                                            signup.dataShortName)
          signup.submitSuccess = true;
        }
      });
    }
  };

  signup.initialize();
}

})();
