app.service('CardapioServices', function(){
	//Mock Bebidas
	var bebidas = [
		{'nome': 'Vinho Tinto Brasil', 'id' : 1, 'preco' : 40.20, 
			'imagem' : 'img/garrafas.png', 'descricao':'Vinho tinto seco, da região Sul do país.'},
		{'nome': 'Cerveja Especial', 'id' : 2, 'preco' : 23.00, 
			'imagem' : 'img/cerveja.png', 'descricao':'Cerveja elaborada artesanalmente com um toque frutado.'},
		{'nome': 'Whisky 18 anos', 'id' : 3, 'preco' : 200.00,
		'imagem' : 'img/whisky.png', 'descricao':'Whisky de fabricação Russa.' }
	];
	//Mock Petiscos
	var petiscos = [
		{	'nome': 'Filé ao molho madeira', 
			'id' : 4, 
			'preco' : 60.00, 
			'descricao' : 'Acompanha fritas, arroz'},
		{'nome': 'Camarão ao alho', 'id' : 5, 'preco' : 21.00},
		{'nome': 'Lagosta assada', 'id' : 6, 'preco' : 100.00}
	];

	//Mock Sucos
	var sucos = [
		{'nome': 'Cajá', 'id' : 7, 'preco' : 3.00},
		{'nome': 'Açaí', 'id' : 8, 'preco' : 4.00},
		{'nome': 'Cacau', 'id' : 9, 'preco' : 5.00}
	];

	this.getPetiscos = function(){
		return petiscos;
	}


	
	this.getBebidas = function(){
		return bebidas;
	}

	this.getSucos = function(){
		return sucos;
	}

	this.getDetalheItem = function(id, callback){

		bebidas.forEach(function(bebida){
			if(bebida.id == id){
				callback(bebida);
			}
		});

		petiscos.forEach(function(petisco){
			if(petisco.id == id){
				callback(petisco);
			}
		});

		sucos.forEach(function(suco){
			if(suco.id == id){
				callback(suco);
			}
		});
	}

	callback = function(item){
		return item;
	}

});