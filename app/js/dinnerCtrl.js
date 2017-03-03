// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  // Variables used in the view
  $scope.numberOfGuests = Dinner.getNumberOfGuests();


  // Functions the view can call
  $scope.setNumberOfGuests = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.decNumberOfGuests = function() {
    Dinner.decNumberOfGuests();
  }
  
  $scope.incNumberOfGuests = function() {
    Dinner.incNumberOfGuests();
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});