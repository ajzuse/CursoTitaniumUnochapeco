
function JanelaPrincipal(){
	var self = {};
	var janela;
	var banner;
	var btnCadastrar;
	var btnCategorias;
	var btnTodas;
	
	self.criar = function(){
		janela = criarJanela(true);	
		banner = require('../components/Banner')();
		banner.criar('Receitas da Vovó', false);
		
		btnCadastrar = Ti.UI.createButton({
			left: '10%',
			top: '20%',
			height: '8%',
			width: '80%',
			title: 'Cadastrar Receita',
			borderColor: '#95a5a6'
		});
		
		btnCategorias = Ti.UI.createButton({
			left: '10%',
			top: '45%',
			height: '8%',
			width: '80%',
			title: 'Pesquisar Por Categoria',
			borderColor: '#95a5a6'
		});
		
		btnTodas = Ti.UI.createButton({
			left: '10%',
			top: '60%',
			height: '8%',
			width: '80%',
			title: 'Todas as Receitas',
			borderColor: '#95a5a6'
		});
		
		janela.add(btnCadastrar);
		janela.add(btnCategorias);
		janela.add(btnTodas);
		
		btnCadastrar.addEventListener('click', clickCadastrar);
		btnCategorias.addEventListener('click', clickCategorias);
		btnTodas.addEventListener('click', clickTodas);
		
		janela.add(banner.view());
		janela.open();
	};
	
	function clickCadastrar(){
		
	}
	
	function clickCategorias(){
		var categoria = require('../forms/Categorias')();
		categoria.criar();
	}
	
	function clickTodas(){
		var receita = require('../forms/Receitas')();
		receita.criar();
	}
	
	return self;	
}

module.exports = JanelaPrincipal;
