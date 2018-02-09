app.controller('defensesController', ['$scope', '$http', function($scope, $http) {
    $scope.initDefenses = function() {
    	$scope.ddch.level0.defenses = [
			{ score: 17, def: 'AC', lvl: 10, armor: 6, class: undefined, feat: undefined, enh: undefined, misc: 1 },
			{ score: 15, def: 'FORT', lvl: 10, armor: 4, class: 1, feat: undefined, enh: undefined, misc: undefined },
			{ score: 13, def: 'REF', lvl: 10, armor: 2, class: undefined, feat: undefined, enh: undefined, misc: 1 },
			{ score: 11, def: 'WILL', lvl: 10, armor: undefined, class: 1, feat: undefined, enh: undefined, misc: undefined }
		]
    };
}]);
