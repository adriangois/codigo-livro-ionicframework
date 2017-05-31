app.controller('BebidasCtrl', function($scope, Sessao, CardapioServices,$firebaseObject,$ionicLoading, $ionicActionSheet){
  
  $scope.data = {
    showDelete: false
  };
  $scope.onItemDelete = function(item) {
    $scope.bebidas.splice($scope.bebidas.indexOf(item), 1);
  };

  $scope.abriActionSheet = function(){
  	$ionicActionSheet.show({
     buttons: [
       { text: 'Whatsapp' },
       { text: 'Email' }
     ],
     buttonClicked: function(index) {
       return true;
     }
   });
  }

	

	$ionicLoading.show({
		  	template: 'Carregando...'
		}).then(function(){
		  	$scope.bebidas  = [];
		});
	 
	 var ref = firebase.database().ref("/bebidas").once("value",function(valor){
		    $ionicLoading.hide().then(function(){
		       $scope.bebidas = valor.val();
		       console.log(valor.val());
		    });
	 });
	 
});