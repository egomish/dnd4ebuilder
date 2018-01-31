app.controller('basicInfoController', ['$scope', '$http', 'characterInfo', function($scope, $http, characterInfo) {

	$scope.localProperties = {
		characterName: undefined,
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
		wheight: undefined,
		alignment: undefined,
		deity: undefined,
		rpgaNumber: undefined
	};

    $scope.updateCharacterInfo = function(key) {
    	characterInfo.set(key, $scope.localProperties[key]);
    };
}]);
