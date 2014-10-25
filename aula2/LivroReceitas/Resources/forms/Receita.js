function Receita(){
	var self = {};
	var janela;
	var banner;
	var scrollable;
	
	self.criar = function(_id, _nome){
		janela = criarJanela();
		banner = require('../components/Banner')();
		banner.criar(_nome);
		
		scrollable = Ti.UI.createScrollableView({
			top: '10%',
			height: '90%',
			width: '100%'
		});
		
		janela.add(banner.view());
		janela.add(scrollable);
		
		banner.onVoltar(function(){
			janela.close();
		});
		
		carregarDados();
		
		janela.open();
	};
	
	function carregarDados(_id){
		var descricao = require('../forms/DescricaoReceita')();
		descricao.criar(_id);
		scrollable.addView(descricao.view());
		
		var ingredientes = require('../forms/Ingredientes')();
		ingredientes.criar(_id);
		scrollable.addView(ingredientes.view());
	}
	
	return self;
}

module.exports = Receita;
