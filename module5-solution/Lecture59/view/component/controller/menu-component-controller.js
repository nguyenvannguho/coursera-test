angular.module('public')
  .component('menuList', {
      templateUrl: 'view/component/controller/menu.component.template.html',
      controller: MenuListComponentController,
      bindings: {
        items: '<'
      }
  })
  .controller('MenuListComponentController', MenuListComponentController);

  function MenuListComponentController () {
    var $ctrl = this;
    console.log("AAAAAAAA" + $ctrl.items);
    for(var item in $ctrl.items) {
      console.log($ctrl.items[item]);
    }

    $ctrl.getPatchImage = function (category_short_name) {
      return "images/menu/" + category_short_name + "/" + category_short_name +".jpg";
    }
  }
