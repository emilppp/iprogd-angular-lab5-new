// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope, $routeParams, Dinner) {

  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case


  //Variables used in the model
  var dish;
  $scope.status = "";

  var dishParam = $routeParams.searchType;

  $scope.getDishCost = function (dish) {
    return Dinner.getDishPrice(dish);
  }

  $scope.numberOfGuestsz = function () {
    return Dinner.getNumberOfGuests();
  }

  $scope.addDishAndReturn = function () {
    if (!dish) return;
    console.log($scope.dish);
    console.log(dishParam);
    Dinner.addDishToMenu($scope.dish, dishParam);
  }

  
    var res = Dinner.Dish.get({ id: $routeParams.dishId });

    res.$promise.then(function (greeting) {
      console.log(greeting);
      $scope.dish = greeting;
      dish = greeting;
      $scope.status = "showing " + greeting.title;


    }, function (reason) {
      $scope.status = "Error";
    });

})