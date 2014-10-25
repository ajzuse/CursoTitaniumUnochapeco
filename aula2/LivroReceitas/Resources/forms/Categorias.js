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
		var catTeste = ['Pães', 'Tortas', 'Pudins'];
		var dados = [];
		
		for (categoria in catTeste){
			var row = Ti.UI.createTableViewRow({
				id: catTeste[categoria],
				height: '30dp'
			});
			
			row.add(Ti.UI.createLabel({
				text: catTeste[categoria],
				color: 'black'
			}));
			
			dados.push(row);
		}
		
		lista.setData(dados);
	}

	return self;
}

module.exports = Categorias;









