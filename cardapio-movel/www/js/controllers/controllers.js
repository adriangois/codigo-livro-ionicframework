var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function($scope, Sessao, $ionicModal, $cordovaDialogs) {
	$scope.bandeja = Sessao.bandeja;
	$scope.modal = {};

	$scope.data = {};
	$ionicModal.fromTemplateUrl('bandeja.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(m){
		$scope.data.item = 0;
		$scope.modal = m;
	});

	$scope.abreModal = function(){
		if($scope.bandeja.length > 0)
			$scope.modal.show();		
	}

	$scope.fechaModal = function(){
		$scope.modal.hide();	
	}

	//Inserção de Edição
	$scope.input = {};
	$scope.input.quant = 1;

	$ionicModal.fromTemplateUrl('modal-edicao.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(m){
		$scope.modalNumber = m;
	});

	

	$scope.editarItem = function(){
		$scope.input.quant = Sessao.bandeja[$scope.data.item].quantidade;
		$scope.modalNumber.show();
	}

	$scope.confirmarEdicao = function(){
		Sessao.bandeja[$scope.data.item].quantidade = $scope.input.quant;
		Sessao.bandeja[$scope.data.item].valor =  $scope.input.quant * Sessao.bandeja[$scope.data.item].item.preco;
		$scope.modalNumber.hide();
	}

	$scope.cancelarEdicao = function(){
		$scope.modalNumber.hide();
		$scope.input.quant = 1;
	}
	//FIM/Inserção de Edição

	//Remoção
	$scope.removerItem = function(){
		$cordovaDialogs.confirm('Deseja realmente remover este item?', 'Remoção', ['Cancelar','OK'])
    	.then(function(buttonIndex) {
      	// Sem botão = 0, 'OK' = 1, 'Cancel' = 2
      	var btnIndex = buttonIndex;
      	if( btnIndex == 1){
      		Sessao.bandeja.splice($scope.data.item,1);
     	 }
    });


		
	}

	$scope.historicoPedidos = Sessao.historicoPedidos;
	$scope.pedir = function(){
		console.log($scope.historicoPedidos);
		Sessao.historicoPedidos = Sessao.historicoPedidos.concat(Sessao.bandeja);
		Sessao.bandeja.splice(0,Sessao.bandeja.length);
		$scope.historicoPedidos = Sessao.historicoPedidos;
		$scope.modal.hide();
	}

	$scope.conta = {};
	$scope.conta.quantidadePessoa = 1;
	$scope.calcularConta = function(){
		$scope.conta.total = 0;
		$scope.historicoPedidos.forEach(function(v){
			$scope.conta.total = $scope.conta.total + v.valor;
		})
		$scope.conta.porcentagem = $scope.conta.total * 10/100;
		$scope.conta.subtotal = $scope.conta.porcentagem + $scope.conta.total;
	}


	
});
