const app = angular.module('MyApp', [])

app.controller('MainController', ['$http', function($http){

  this.createItem = function(){
  $http({
    method:'POST',
    url:'/items',
    data: {
      name: this.name,
      calories: this.calories,
      protein: this.protein,
      carbs: this.carbs,
      fats: this.fats,
      sugar: this.sugar,
      fiber: this.fiber
    }
  }).then(function(response){
    controller.getItems();
    })
  }

  this.getItems = function(){
    $http({
      method:'GET',
      url:'/items'
    }).then(function(response){
      controller.items = response.data;
    })
  }

  this.deleteItem = function(item){
    $http({
      method:'DELETE',
      url:'/items/' + items._id
    }).then(function(response){
      controller.getItems();
    })
  }

  this.editItem = function(item){
    $http({
      method:'PUT',
      url:'/items/' + items._id,
      data: {
        name: this.updatedName,
        calories: this.updatedCalories,
        protein: this.updatedProtein,
        carbs: this.updatedCarbs,
        fats: this.updatedFats,
        sugar: this.updatedSugar,
        fiber: this.updatedFiber
      }
    }).then(function(response){
      controller.getItems();
    })
  }
  this.getItems();

}])
