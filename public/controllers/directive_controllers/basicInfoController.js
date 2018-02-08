app.controller('basicInfoController', ['$scope', '$http', function($scope, $http) {
	$scope.initBasicInfo = function() {
		$scope.ddch.level0.name = undefined;
		$scope.ddch.level0.level = undefined;
		$scope.ddch.level0.class = undefined;
		$scope.ddch.level0.paragonPath = undefined;
		$scope.ddch.level0.epicDestiny = undefined;
		$scope.ddch.level0.totalXP = undefined;
		$scope.ddch.level0.race = undefined;
		$scope.ddch.level0.size = undefined;
		$scope.ddch.level0.age = undefined;
		$scope.ddch.level0.gender = undefined;
		$scope.ddch.level0.height = undefined;
		$scope.ddch.level0.weight = undefined;
		$scope.ddch.level0.alignment = undefined;
		$scope.ddch.level0.deity = undefined;
		$scope.ddch.level0.rpgaNumber = undefined;
	};
}]);

