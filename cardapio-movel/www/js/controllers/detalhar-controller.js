app.controller('DetalharCtrl', function($scope, $stateParams, CardapioServices, Sessao, $ionicModal){
	$scope.item = {};

	$scope.input = {};
	$scope.input.quant = 0;

	$scope.modal = {};
	
	$ionicModal.fromTemplateUrl('my-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(m){
		$scope.modal = m;
	});

	$scope.abreModal = function(){
		$scope.modal.show();		
	}

	$scope.fechaModal = function(){
		$scope.modal.hide();	
		$scope.input.quant = 1;	
	}


	CardapioServices.getDetalheItem($stateParams.itemID, function(item){
		$scope.item = item;
	});

	$scope.pedir = function(){
		Sessao.bandeja.push({item: $scope.item, quantidade : $scope.input.quant, valor: $scope.item.preco*$scope.input.quant});
		//Sessao.bandeja.push({item: $scope.item, quantidade : $scope.input.quant});
		$scope.modal.hide();
		$scope.input.quant = 1;
	}
	
})