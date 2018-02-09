app.controller('powersController', ['$scope', '$http', function($scope, $http) {
    $scope.initPowers = function() {
      $scope.ddch.level1 = {
        atWillPower1: "Commander's Strike",
        atWillPower2: "Furious Smash",
        encounterPower: "Hammer And Anvil",
        dailyPower: "Pin the Foe"
      };
      $scope.ddch.level2 = {
        utilityPower: "Knight's Move"
      };
      $scope.ddch.level3 = {
        encounterPower: "Hold the Line"
      };
      $scope.ddch.level5 = {
        dailyPower: "Turning Point"
      };
      $scope.ddch.level6 = {
        utilityPower: "Quick Step"
      };
      $scope.ddch.level7 = {
        encounterPower: "Lion's Roar"
      };
      $scope.ddch.level9 = {
        dailyPower: "Knock Them Down"
      };
      $scope.ddch.level10 = {
        utilityPower: "Ease Suffering"
      };
    }
}]);
