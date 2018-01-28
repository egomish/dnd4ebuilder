var app = angular.module('app', ['ui.bootstrap']);
app.controller('MainController', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
    
    $scope.character = {};

    $scope.chooseRace = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: '../views/raceModal.html',
            controller: 'raceModalController',
            size: 'sm',
            scope: $scope
        });
        $scope.modalInstance.result.then(function(selectedItem) {
            $scope.character.race = selectedItem;
        });
    };

    $scope.chooseClass = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: '../views/classModal.html',
            controller: 'classModalController',
            size: 'sm',
            scope: $scope
        });
        $scope.modalInstance.result.then(function(selectedItem) {
            $scope.character.class = selectedItem;
        });
    };

}]);