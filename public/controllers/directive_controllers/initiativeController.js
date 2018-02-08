app.controller('initiativeController', ['$scope', '$http', function($scope, $http) {
    $scope.initInitiative = function() {
        $scope.ddch.level0.initiative = {
            score: 2,
            dex: 0,
            lvl: 0,
            misc: 2
        };
    }
}]);
