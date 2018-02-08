app.controller('defensesController', ['$scope', '$http', function($scope, $http) {
    $scope.initDefenses = function() {
    	$scope.ddch.level0.defenses = [
			{ score: 17, def: 'AC', lvl: 10, armor: 6, class: 0, feat: 0, enh: 0, misc: 1 },
			{ score: 15, def: 'FORT', lvl: 10, armor: 4, class: 1, feat: 0, enh: 0, misc: 0 },
			{ score: 13, def: 'REF', lvl: 10, armor: 2, class: 0, feat: 0, enh: 0, misc: 1 },
			{ score: 11, def: 'WILL', lvl: 10, armor: 0, class: 1, feat: 0, enh: 0, misc: 0 }
		]
    };
}]);
