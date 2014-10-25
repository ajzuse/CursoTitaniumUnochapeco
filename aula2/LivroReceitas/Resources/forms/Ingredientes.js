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
		var sql = 'SELECT id, nome, quantidade, unidade, aplicacao';
		sql +=    '  FROM Categoria ';
		sql +=    ' WHERE idReceita = ' + _id;
		sql +=    'ORDER BY id';
		var bd = abrirBaseDados();
		var dados = [];
		var resultado = bd.execute(sql);
		while(resultado.isValidRow()){
			var descricao = resultado.fieldByName('quantidade');
			descricao += ' ' + resultado.fieldByName('unidade');
			descricao += ' de ' + resultado.fieldByName('nome');
			
			var row = Ti.UI.createTableViewRow({
				id: resultado.fieldByName('id'),
				height: '30dp'
			});
			
			row.add(Ti.UI.createLabel({
				text: descricao,
				color: 'black'
			}));
			
			dados.push(row);
			resultado.next();
		}
		bd.close();
		lista.setData(dados);
	}

	return self;
}

module.exports = Ingredientes;









