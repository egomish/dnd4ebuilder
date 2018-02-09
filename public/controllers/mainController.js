var app = angular.module('app', []);
app.controller('mainController', ['$scope', '$http', function($scope, $http) {
	$scope.ddch = {
		level0: {},
		level1: {},
		level2: {},
		level3: {},
		level4: {},
		level5: {},
		level6: {},
		level7: {},
		level8: {},
		level9: {},
		level10: {}
	};
	$scope.log = function() {
		console.log($scope.ddch);
	}
}]);	