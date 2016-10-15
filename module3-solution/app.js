'use strict'
angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('itemList', ItemList);

//Create new tag
function ItemList () {
  var ddo = {
    templateUrl: 'itemList.html',
    scope: {
      narrowItDown: '=myNarrow'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService','$timeout']
function NarrowItDownController(MenuSearchService,$timeout) {
  var narrowItDown = this;
  narrowItDown.searchTerm = "";
  narrowItDown.itemList = [];
  narrowItDown.firstLoad = false;

  //Process for event click
  narrowItDown.click = function () {

  MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);

  $timeout(function () {
    narrowItDown.itemList = MenuSearchService.itemList
    narrowItDown.firstLoad = true;
  }, 2000);

  };

  //Process for event cancel
  narrowItDown.Cancel = function (index) {
    console.log("Remove item " + index);
    narrowItDown.itemList = MenuSearchService.removeItem(index);
  };

  //Check Error
  narrowItDown.checkError = function () {
    if (narrowItDown.firstLoad &&
        (narrowItDown.itemList.length === 0 || MenuSearchService.getErrorMessage.length !== 0)) {
      return true;
    } else {
      return false;
    }
  }
}

MenuSearchService.$inject = ['$http','$q']
  function MenuSearchService ($http, $q) {
    var serviceMenuSearch = this;
    serviceMenuSearch.itemList = [];
    var errorMessage = "";

    //Call API get data form Service
    var getItemsFromServer = function (itemName) {
      var deferred = $q.defer();
      var result = {
        message: ""
      }

      $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function(response){
        var dataItems = response.data.menu_items;
        var foundList = [];
        for(var key in dataItems) {
          var descriptionTest = dataItems[key].description;
          if(descriptionTest.indexOf(itemName) !== -1) {
            foundList.push(dataItems[key]);
          }
        }
          console.log("Debug: foundList.length = " + foundList.length);
          if(foundList.length > 0) {
            console.log("Debug: foundList[0]" + foundList[0].name);
            deferred.resolve(foundList);
          } else {
            result.message = "Nothing found";
            deferred.reject(result);
          }

        }, function(errResponse){
          result.message = "Nothing found";
          deferred.reject(result);
        });

        return deferred.promise;
    };

    serviceMenuSearch.getMatchedMenuItems = function (searchTerm) {
      console.log ("Debug: searchTerm = " + searchTerm);

      if(searchTerm !== "") {
        var promise = getItemsFromServer(searchTerm);

        promise.then(function (foundList) {
          serviceMenuSearch.itemList = foundList;
        }, function (errResponse) {
          console.log("Debug: Error Occur = " + errResponse.message);
          errorMessage = errResponse.message;
          serviceMenuSearch.itemList = [];
        });
      } else {
        console.log ("Debug: Error Don't Input Text");
        errorMessage = "Nothing found";
        serviceMenuSearch.itemList = []
      }
    };

    serviceMenuSearch.removeItem = function (index) {
      serviceMenuSearch.itemList.splice(index, 1);
      console.log(serviceMenuSearch.itemList);
      return serviceMenuSearch.itemList;
    };

    serviceMenuSearch.getErrorMessage = function () {
      return errorMessage;
    };
  }
