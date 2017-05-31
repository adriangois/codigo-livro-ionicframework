app.controller('PetiscosCtrl', function($scope, CardapioServices){
	$scope.petiscos = CardapioServices.getPetiscos();
});