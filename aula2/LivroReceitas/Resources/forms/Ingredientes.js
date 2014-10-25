function Ingredientes() {
	var self = {};
	var view;
	var lista;
	
	self.criar = function(_id) {
		view = Ti.UI.createView({
			top: 0,
			left: 0,
			height: '100%',
			width: '100%'
		});
		
		lista = Ti.UI.createTableView({
			top: 0,
			left: 0,
			height: '100%',
			width: '100%'
		});
		
		carregarDados(_id);
		
		view.add(lista);
	};
	
	self.view = function(){
		return view;
	};
	
	function carregarDados(_id) {
		var ingTeste = ['Carne', 'Sal', 'Cebola', 'Alho'];
		var dados = [];
		
		for (ingrediente in ingTeste){
			var row = Ti.UI.createTableViewRow({
				id: ingTeste[ingrediente],
				nome: ingTeste[ingrediente],
				height: '30dp'
			});
			
			row.add(Ti.UI.createLabel({
				text: ingTeste[ingrediente],
				color: 'black'
			}));
			
			dados.push(row);
		}
		
		lista.setData(dados);
	}

	return self;
}

module.exports = Ingredientes;









