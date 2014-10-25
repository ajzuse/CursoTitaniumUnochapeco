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
		var recTeste = ['Bife Bêbado', 'Churrasco', 'Torrada'];
		var dados = [];
		
		for (receita in recTeste){
			var row = Ti.UI.createTableViewRow({
				id: recTeste[receita],
				nome: recTeste[receita],
				height: '30dp'
			});
			
			row.add(Ti.UI.createLabel({
				text: recTeste[receita],
				color: 'black'
			}));
			
			dados.push(row);
		}
		
		lista.setData(dados);
	}

	return self;
}

module.exports = Receitas;









