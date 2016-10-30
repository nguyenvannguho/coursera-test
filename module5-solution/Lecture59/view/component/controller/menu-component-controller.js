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
    $ctrl.id = $ctrl.items[0].id;
    $ctrl.title = $ctrl.items[0].name;
    $ctrl.description = $ctrl.items[0].description;
    // console.log("AAAAAAAA" + $ctrl.items);
    // for(var item in $ctrl.items) {
    //   console.log($ctrl.items[item]);
    // }
    console.log("MenuCompoent: " + $ctrl.items[0].id);

    $ctrl.patchImage = "images/menu/" + $ctrl.items[0].category_short_name + "/" + $ctrl.items[0].category_short_name +".jpg";
console.log("MenuCompoent: " + $ctrl.patchImage);
    // $ctrl.getPatchImage = function (category_short_name) {
    //   return "images/menu/" + category_short_name + "/" + category_short_name +".jpg";
    // }
  }
