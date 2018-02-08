app.controller('raceFeaturesController', ['$scope', '$http', function($scope, $http) {
    $scope.ddch.level0.raceFeatures = [
        { name: 'Dwarven Weapon Proficiency', desc: 'Proficient with hammers.' },
        { name: 'Cast-Iron Stomach', desc: '+5 bonus to saving throws against poison.' },
        { name: 'Encumbered Speed', desc: 'Armor or heavy load does not reduce your speed.' },
        { name: 'Dwarver Resilience', desc: 'Second Wind is a minor action' },
        { name: 'Stand Your Ground', desc: 'Can move 1 less when being forced to move.' }
    ];
}]);
