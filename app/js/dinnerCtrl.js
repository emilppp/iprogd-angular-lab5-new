// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope, Dinner) {

  // Variables used in the view
  // $scope.guests = Dinner.getNumberOfGuests();
  // $scope.numberOfGuests = Dinner.getNumberOfGuests();
  // Functions the view can call


  $scope.setNumberOfGuests = function (number) {
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function () {
    return Dinner.getNumberOfGuests();
  }

  $scope.incNumberOfGuests = function () {
    Dinner.setNumberOfGuests(Dinner.getNumberOfGuests() + 1);
  }

  $scope.decNumberOfGuests = function () {
    Dinner.setNumberOfGuests(Dinner.getNumberOfGuests() - 1);
  }

  $scope.getTotalMenuCost = function () {
    return Dinner.getTotalMenuPrice();
  }

  $scope.getFullMenu = function () {
    return Dinner.getFullMenu();
  }

  $scope.getPrice = function (dish) {
    return Dinner.getDishPrice(dish);
  }

  $scope.removeDish = function (dish) {
    Dinner.removeDishFromMenu(dish);
  }

  $scope.getAllIngredients = function () {
    return Dinner.getAllIngredients();
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});