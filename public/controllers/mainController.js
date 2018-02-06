var app = angular.module('app', []);
app.controller('mainController', ['$scope', '$http', 'characterInfo', function($scope, $http, characterInfo) {
	$scope.log = function() {
		console.log(characterInfo.getAll());
	}
}]);	
