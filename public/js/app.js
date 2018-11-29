const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){

  this.name = "";
  this.serving = "";
  this.calories = "";
  this.protein = "";
  this.carbohydrates = "";
  this.fat = "";
  this.sugar = "";
  this.fiber = "";

  const controller = this;

  this.getItems = function(){
    $http({
      method: 'GET',
      url: '/items'
    }).then(function(response){
      controller.items = response.data;
    })
  }

  this.createItem = function(){
    $http({
      method: 'POST',
      url: '/items',
      data: {
        name: this.name,
        serving: this.serving,
        calories: this.calories,
        protein: this.protein,
        carbohydrates: this.carbohydrates,
        fat: this.fat,
        sugar: this.sugar,
        fiber: this.fiber
      }
    }).then(function(response){
      controller.getItems();
    })
  }

  this.deleteItem = function(item){
    $http({
      method: 'DELETE',
      url: '/items/' + item._id
    }).then(function(response){
      controller.getItems();
    })
  }

  this.editItem = function(item){
    $http({
      method: 'PUT',
      url: '/items/' + item._id,
      data: {
        name: this.updatedName,
        serving: this.updatedServing,
        calories: this.updatedCalories,
        protein: this.updatedProtein,
        carbohydrates: this.updatedCarbohydrates,
        fat: this.updatedFat,
        sugar: this.updatedSugar,
        fiber: this.updatedFiber
      }
    }).then(function(response){
      controller.getItems();
    })
  }

  this.getItems();

}]);
