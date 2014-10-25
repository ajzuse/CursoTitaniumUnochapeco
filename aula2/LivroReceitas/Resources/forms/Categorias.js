function Categorias() {
	var self = {};
	var janela;
	var banner;
	var lista;
	
	self.criar = function() {
		janela = criarJanela();
		
		banner = require('../components/Banner')();
		banner.criar('Categorias');
		
		lista = Ti.UI.createTableView({
			top: '15%',
			left: '5%',
			height: '83%',
			width: '90%'
		});
		
		banner.onVoltar(function(){
			janela.close();
		});
		
		lista.addEventListener('click', clickCategoria);
		
		carregarDados();
		
		janela.add(banner.view());
		janela.add(lista);
		janela.open();
	};
	
	function clickCategoria(e){
		var receita = require('../forms/Receitas')();
		receita.criar(e.rowData.id);
	};
	
	function carregarDados() {
		var sql = 'SELECT id, nome FROM Categoria';
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

module.exports = Categorias;









