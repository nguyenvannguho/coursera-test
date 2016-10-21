angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

ItemsController.$inject = ['itemsData']
  function ItemsController (itemsData) {
    var ItemsSetting = this;
    ItemsSetting.itemsList = itemsData;
  }
