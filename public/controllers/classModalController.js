app.controller('classModalController', ['$scope', '$http', function($scope, $http) {
    $http({
        method : 'GET',
        url : '/classes'
    }).then(function success(response) {
        $scope.classes = response.data.body;
    }, function error(response) {
        console.log('Error trying to GET classes');
    });

    $scope.selected = undefined;

    $scope.changeClass = function() {
        for(var i=0; i<$scope.classes.length; i++) {
            if($scope.selected == $scope.classes[i].name) {
                $scope.description = $scope.classes[i].description;
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