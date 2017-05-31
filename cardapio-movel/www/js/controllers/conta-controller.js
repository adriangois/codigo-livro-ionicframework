app.controller('ContaCtrl', function($scope, $ionicModal, Sessao){
	$scope.numeroPessoas = {};
	$scope.numeroPessoas.valor = 1;
	$scope.total = 100.00;
	$scope.onChangeDivisao = function(){
		console.log($scope.numeroPessoas);
		$scope.totalDividido = $scope.total / $scope.numeroPessoas.valor;
	}

	//Modal Fechar Conta
	$scope.input = {};
	$scope.input.quant = 1;


	$ionicModal.fromTemplateUrl('modal-fechar-conta.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal){
		$scope.modalFecharConta = modal;
	});

	$ionicModal.fromTemplateUrl('modal-pagar-conta.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal){
		$scope.modalPagarConta = modal;
	});

	$scope.pagar = function(){
		var valor = -$scope.conta.valorPagar;
		Sessao.historicoPedidos.push({item: { nome : "Pagamento"}, quantidade : 1, valor: valor});
		$scope.modalPagarConta.hide();
	}
});