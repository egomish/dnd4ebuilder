app.controller('abilityScoresController', ['$scope', '$http', function($scope, $http) {
    $scope.initScores = function() {
    	$scope.ddch.level0.str_score = [
			{ base_score: 10, abil_mod: 0, lvl_mod: 0 }
		]
		$scope.ddch.level0.con_score = [
			{ base_score: 10, abil_mod: 0, lvl_mod: 0 }
		]
		$scope.ddch.level0.dex_score = [
			{ base_score: 10, abil_mod: 0, lvl_mod: 0 }
		]
		$scope.ddch.level0.int_score = [
			{ base_score: 10, abil_mod: 0, lvl_mod: 0 }
		]
		$scope.ddch.level0.wis_score = [
			{ base_score: 10, abil_mod: 0, lvl_mod: 0 }
		]
		$scope.ddch.level0.cha_score = [
			{ base_score: 10, abil_mod: 0, lvl_mod: 0 }
		]
	}
}]);
