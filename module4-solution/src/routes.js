'use strict'
angular.module('MenuApp')
  .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/CategoriesList/template/categories.template.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
        categoriesData: ['StoreDataService', function(StoreDataService) {
          return StoreDataService.getCategoriesData();
        }]
      }
    })
    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'src/MenuList/template/items.template.html',
      controller: 'ItemsController as ctrl',
      resolve: {
        itemsData: ['StoreDataService', '$stateParams', function(StoreDataService, $stateParams) {
          return StoreDataService.getItemsForCategory($stateParams.shortName);
        }]
      }
    })
    .state('home', {
      url: '/',
      templateUrl: 'src/MenuList/template/home.template.html'
    });
}
