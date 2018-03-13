app.controller('modalsController', ['$scope', '$http', function($scope, $http) {
    $scope.getRaces = function() {
        $http.get('/races').then(function(response) {
          $scope.races = response.data;
      }, function (error) {
          console.log('Could not GET races from server');
      });
    };

    $scope.selectedRace = undefined;

    $scope.changeRace = function() {
        for(var i=0; i<$scope.races.length; i++) {
            if($scope.races[i].name == $scope.selectedRace) {
                $scope.raceDescription = $scope.races[i].description;
            }
        }
    };

    $scope.ok = function() {
        $scope.modalInstance.close($scope.selectedRace);
    };

    $scope.cancel = function() {
        $scope.modalInstance.close();
    };
}]);