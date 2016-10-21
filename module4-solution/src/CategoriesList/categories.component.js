angular.module('MenuApp')
  .component('categoriesList', {
      templateUrl: 'src/CategoriesList/template/categories.component.template.html',
      controller: CategoriesListComponentController,
      bindings: {
        items: '<'
      }
  })
  .controller('CategoriesListComponentController', CategoriesListComponentController);

  function CategoriesListComponentController () {
    var $ctrl = this;
    $ctrl.showItem = function () {
      //if($ctrl.items === 'undefine' || $ctrl.items.length <= 0)
        return false;
    };
  }
