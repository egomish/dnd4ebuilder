app.controller('basicInfoController', ['$scope', '$http', 'characterInfo', function($scope, $http, characterInfo) {
	$scope.init = function() {
		//instantiate the object to contain data bindings
		$scope.localProperties = {
			level0: {
				name: undefined,
				level: undefined,
				class: undefined,
				paragonPath: undefined,
				epicDestiny: undefined,
				totalXP: undefined,
				race: undefined,
				size: undefined,
				age: undefined,
				gender: undefined,
				height: undefined,
				weight: undefined,
				alignment: undefined,
				deity: undefined,
				rpgaNumber: undefined
			}
		};
		//send original attribute states to the characterInfo service
		for(var level in $scope.localProperties) {
			for(var attr in $scope.localProperties[level]) {
				characterInfo.set(level, attr, $scope.localProperties[level][attr]);
			}
		}
	};

    $scope.updateCharacterInfo = function(level, attr) {
   		characterInfo.set(level, attr, $scope.localProperties[level][attr]);
    };
}]);

