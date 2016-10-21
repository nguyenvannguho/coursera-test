angular.module('data', [])
  .service('StoreDataService', StoreDataService);

StoreDataService.$inject = ['MenuDataService']
function StoreDataService (MenuDataService) {
  var dataService = this;

  var categoriesData = [];
  var itemForCategory = [];

  dataService.getCategoriesData = function () {
    categoriesData = MenuDataService.getAllCategories();
    return categoriesData;
  };

  dataService.getItemsForCategory = function (categoryShortName) {
    itemForCategory = MenuDataService.getItemsForCategory(categoryShortName);
    return itemForCategory;
  };
}
