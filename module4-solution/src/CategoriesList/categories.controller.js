angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoriesData']
  function CategoriesController (categoriesData) {
    var categoriesSetting = this;
    categoriesSetting.categoriesList = categoriesData;
    console.log("CategoriesController: " + categoriesSetting.categoriesList[0]);
    //var promises = [];
    //categories.categoriesList
    //promises.push(StoreDataService.getCategoriesData());
    //$q.all(promises).then(function(response) {
      //categories.categoriesList = response[0];
      //console.log("CategoriesController: " + categories.categoriesList);
    //}).catch(function (error) {
      //Error
    //}).finally(function (){
      //Do thing
    //});
  }
