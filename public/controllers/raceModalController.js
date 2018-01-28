app.controller('raceModalController', ['$scope', '$http', function($scope, $http) {
    $http({
        method : 'GET',
        url : '/races'
    }).then(function success(response) {
        $scope.races = response.data.body;
    }, function error(response) {
        console.log('Error trying to GET races');
    });

    $scope.selected = undefined;

    $scope.changeRace = function() {
        for(var i=0; i<$scope.races.length; i++) {
            if($scope.races[i].name == $scope.selected) {
                $scope.description = $scope.races[i].description;
            }
        }
    };

    $scope.ok = function() {
        $scope.modalInstance.close($scope.selected);
    };

    $scope.cancel = function() {
        $scope.modalInstance.close();
    };
}]);