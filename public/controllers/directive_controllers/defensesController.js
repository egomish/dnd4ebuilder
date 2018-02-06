app.controller('defensesController', ['$scope', '$http', 'characterInfo', function($scope, $http, characterInfo) {
    $scope.init = function() {
    	$scope.localProperties = {
			level0: {
				defenses: [
					{
						score: 17,
						def: 'AC',
						lvl: 10,
						armor: 6,
						class: 0,
						feat: 0,
						enh: 0,
						misc: 1
					},
					{
						score: 15,
						def: 'FORT',
						lvl: 10,
						armor: 4,
						class: 1,
						feat: 0,
						enh: 0,
						misc: 0
					},
					{
						score: 13,
						def: 'REF',
						lvl: 10,
						armor: 2,
						class: 0,
						feat: 0,
						enh: 0,
						misc: 1
					},
					{
						score: 11,
						def: 'WILL',
						lvl: 10,
						armor: 0,
						class: 1,
						feat: 0,
						enh: 0,
						misc: 0
					}
				]
			}
		};
		//send original attribute states to the characterInfo service
		for(var level in $scope.localProperties) {
			for(var attr in $scope.localProperties[level]) {
				characterInfo.set(level, attr, $scope.localProperties[level][attr]);
			}
		}
    };
}]);
