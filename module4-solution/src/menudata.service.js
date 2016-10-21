angular.module('MenuApp')
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http) {
  var menuService = this;

  menuService.getAllCategories = function () {
    return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
                  .then(function(response){
                    return response.data;
                  });
  };

  menuService.getItemsForCategory = function (categoryShortName) {
    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
                  .then(function(response){
                    return response.data.menu_items;
                  });
  };
}
