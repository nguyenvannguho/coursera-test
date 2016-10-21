angular.module('MenuApp')
  .component('itemsList', {
      templateUrl: 'src/MenuList/template/items.component.template.html',
      controller: ItemsListComponentController,
      bindings: {
        items: '<'
      }
  })
  .controller('ItemsListComponentController', ItemsListComponentController);

  function ItemsListComponentController () {
    var $ctrl = this;

    $ctrl.showItem = function () {
      //if($ctrl.items === 'undefine' || $ctrl.items.length <= 0)
        return false;
    };
  }
