angular.module('public')
  .service('StoreDataService', StoreDataService);

function StoreDataService () {
  var dataService = this;

  var myInfo = {
    'firstName': '',
    'lastName': '',
    'email' : '',
    'phone' : '',
    'shortName' : '',
    'dataShortName' : []
  };

  dataService.saveDataRegister = function (firstName, lastName, email, phone, shortName, dataShortName) {
    myInfo.firstName = firstName;
    myInfo.lastName = lastName;
    myInfo.email = email;
    myInfo.phone = phone;
    myInfo.shortName = shortName;
    console.log(dataShortName);
    while(myInfo.dataShortName.length){ myInfo.dataShortName.pop(); }
    myInfo.dataShortName.push(dataShortName);
    console.log(myInfo.dataShortName.length);
  };

  dataService.getDataRegister = function () {
    return myInfo;
  };

  dataService.checkDataRegister = function () {
    if (myInfo.firstName !== '') {
      return true;
    }
    return false;
  };
}
