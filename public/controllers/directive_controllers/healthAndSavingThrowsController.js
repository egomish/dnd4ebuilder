app.controller('healthAndSavingThrowsController', ['$scope', '$http', function($scope, $http) {
    $scope.initHealthAndSavingThrows = function() {
      $scope.ddch.level0.healthAndSavingThrows = {
        maxHP: 100,
        bloodiedHP: 50,
        surgeValue: 25,
        surgesPerDay: 8,
        savingThrowMods: "+2 Vs. Life",
        resistances: "Everything"
      };
    }
}]);
