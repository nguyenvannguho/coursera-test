describe('menu list', function () {

  var menucategories;
  var $httpBackend;

  beforeEach(function () {
    module('public');

    inject(function ($injector) {
     menucategories = $injector.get('DataServiceProcessing');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  it('should return item menu follow short name is exist', function() {
    $httpBackend.whenGET('http://dannynguyen-course5.herokuapp.com/menu_items/A1.json').respond({"id":"1"});
    menucategories.getShortName('A1').then(function(response) {
      var result = {"id":"1"};
      console.log(response);
      expect(response).toEqual(result);
    });
    $httpBackend.flush();
  });

  it('should return item menu follow short name is not exist', function() {
    $httpBackend.whenGET('http://dannynguyen-course5.herokuapp.com/menu_items/A.json').respond({'status': 500});
    menucategories.getShortName('A').then(function(response) {
      var result = {'status': 500};
      console.log(response);
      expect(response).toEqual(result);
    });
    $httpBackend.flush();
  });

});
