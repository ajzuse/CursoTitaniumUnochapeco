function Receitas() {
	var self = {};
	var janela;
	var banner;
	var lista;
	
	self.criar = function(_categoria) {
		janela = criarJanela();
		
		banner = require('../components/Banner')();
		banner.criar('Receitas');
		
		lista = Ti.UI.createTableView({
			top: '15%',
			left: '5%',
			height: '83%',
			width: '90%'
		});
		
		banner.onVoltar(function(){
			janela.close();
		});
		
		lista.addEventListener('click', clickReceita);
		
		carregarDados(_categoria);
		
		janela.add(banner.view());
		janela.add(lista);
		janela.open();
	};
	
	function clickReceita(e){
		var receita = require('../forms/Receita')();
		receita.criar(e.rowData.id, e.rowData.nome);
	};
	
	function carregarDados(_categoria) {
		var sql = 'SELECT id, nome FROM Receita ';
		
		if(typeof _categoria != 'undefined'){
			sql += 'WHERE idCategoria = ' + _categoria;
		}
		
		var bd = abrirBaseDados();
		var dados = [];
		var resultado = bd.execute(sql);
		
		while(resultado.isValidRow()){
			var row = Ti.UI.createTableViewRow({
				id: resultado.fieldByName('id'),
				height: '30dp'
			});
			
			row.add(Ti.UI.createLabel({
				text: resultado.fieldByName('nome'),
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

module.exports = Receitas;









