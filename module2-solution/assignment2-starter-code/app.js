'use strict'

var app = angular.module('ShoppingListCheckOff', []);

app.service('ShoppingListCheckOffService', function() {
  var service = this;
  var itemsBuyList = [];
  var itemsAlreadyBoughtList = [];
  var minItem = 0;

  //Add Item for BoughtList
  service.addItem = function (nameItem, qualityItem){
    var item = {name: nameItem, quality: qualityItem};
    itemsAlreadyBoughtList.push(item);
  };

  //Remove Itme of BuyList
  service.removeItem = function(index) {
      itemsBuyList.splice(index, 1);
  };

  //Get All BuyList Item
  service.getItemsBuyList = function() {
    return itemsBuyList;
  };

  //Get All BoughtList Item
  service.getItemsAlreadyBoughtList = function(){
    return itemsAlreadyBoughtList;
  };

  //Set BuyList Item
  service.setItemsBuyList = function(list){
    itemsBuyList = list;
  };

  //Set BoughtList Item
  service.setItemsAlreadyBoughtList = function(list){
    itemsAlreadyBoughtList = list;
  };

  //Check null for BuyList
  service.checkNullItemsBuyList = function(){
    if(itemsBuyList.length === 0){
      return true;
    }
    return false;
  };

  //Check null for BoughtList
  service.checkNullItemsAlreadyBoughtList = function(){
    if(itemsAlreadyBoughtList.length === 0){
      return true;
    }
    return false;
  };
 });

app.controller('ToBuyController', ['ShoppingListCheckOffService', ToBuyController]);
function ToBuyController(ShoppingListCheckOffService){
  var BuyItem = this;
  BuyItem.itemLists = [
    {name: 'Beers', quality: 10},
    {name: 'cookies', quality: 8},
    {name: 'Milks', quality: 5},
    {name: 'Shoes', quality: 2},
    {name: 'Books', quality: 20}
  ];

  //init data first load
  BuyItem.loadData = function (){
    ShoppingListCheckOffService.setItemsBuyList(BuyItem.itemLists);
  };

  //Implement for event click button
  BuyItem.select = function(index){
    ShoppingListCheckOffService.addItem(BuyItem.itemLists[index].name, BuyItem.itemLists[index].quality);
    ShoppingListCheckOffService.removeItem(index);
    BuyItem.itemLists = ShoppingListCheckOffService.getItemsBuyList();
  };

  //Check list is null or not
  BuyItem.checkNullList = function (){
      return ShoppingListCheckOffService.checkNullItemsBuyList();
  };
};

app.controller('AlreadyBoughtController', ['ShoppingListCheckOffService', '$scope', AlreadyBoughtController]);
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.iteamBoughtList = ShoppingListCheckOffService.getItemsAlreadyBoughtList();

  //Check list is null or not
  alreadyBought.checkNullList = function (){
      return ShoppingListCheckOffService.checkNullItemsAlreadyBoughtList();
  };
};
