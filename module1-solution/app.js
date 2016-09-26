(function () {
'use strict'
angular.module('LunchCheck', [])

.controller('LunchCheckController', ['$scope', LunchCheckController]);

function LunchCheckController($scope){
  $scope.listFood = '';
  $scope.resultChecking = '';
  $scope.itemEmpty = '';
  //setMessageColor("black");
  //setBoderTextBoxColor("solid 1px black");


  $scope.checkList = function () {
    $scope.itemEmpty = '';

    var setMessageColor = function (colorName){
      $scope.myObject = {
        "color": colorName
      };
    };

    var setBoderTextBoxColor = function (value){
      $scope.myObjectTextBox = {
        "border": value
      };
    };

    var countItemsValidate = function (array){
      var count = 0;
      var empty = 0;
      for(var x in array){
        if(array[x].trim() !== '' && array[x].trim() !== null && array[x].trim() !== 0){
          count ++;
        }
        else{
          empty ++;
        }
      }

      if(empty > 0)
        $scope.itemEmpty = "Number items empty = " + empty;

      return count;
    };

    console.log($scope.listFood);
    if($scope.listFood == null || $scope.listFood == ''){
      $scope.resultChecking = 'Please enter data first';
      setMessageColor("red");
      setBoderTextBoxColor("solid 1px red");
      return;
    }

    var separator = ',';
    var listFoodTemp = $scope.listFood;
    $scope.listFood = items;

    var items = listFoodTemp.split(separator);

    var totalItems = countItemsValidate(items);

    if(totalItems == 0){
      $scope.resultChecking = 'Please enter data first';
      setMessageColor("red");
      setBoderTextBoxColor("solid 1px red");
    }else if(totalItems <= 3){
      $scope.resultChecking = 'Enjoy!';
      setMessageColor("green");
      setBoderTextBoxColor("solid 1px green");
    }else if (totalItems >= 4) {
      $scope.resultChecking = 'Too much!';
      setMessageColor("green");
      setBoderTextBoxColor("solid 1px green");
    }
  };
}
})();
