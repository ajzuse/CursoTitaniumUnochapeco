function formPrincipal() {
	var self = {};
	var janela;
	var bannerSuperior;
	var labelSuperior;
	var marca;
	var imagem;
	var botao;
	
	self.criar = function() {
		janela = Ti.UI.createWindow({
			height : '100%',
			width : '100%',
			backgroundColor : 'white',
			exitOnClose : true
		});

		bannerSuperior = Ti.UI.createView({
			height : '10%',
			width : '100%',
			top : 0,
			left : 0,
			backgroundColor : config.corFundo
		});

		imagem = Ti.UI.createImageView({
			width : '80%',
			left : '10%',
			top : '15%',
			duration: 3000,
			images : ['./imagens/1.png', './imagens/2.jpg', './imagens/3.jpg', './imagens/4.jpeg', './imagens/5.jpg']
		});

		labelSuperior = Ti.UI.createLabel({
			text : 'Cervejas',
			textAlign : 'center',
			width : '100%',
			height : '100%',
			color : 'white'
		});
		
		botao = Ti.UI.createButton({
			title: 'Cadastro',
			left: '20%',
			bottom: '10%',
			width: '60%',
			height: '10%',
			backgroundColor: config.corFundo,
			color: 'white' 
		});

		marca = Ti.UI.createLabel({
			text : 'Potato Inc.',
			textAlign : 'center',
			height : '5%',
			font : {
				fontSize : 20
			},
			bottom : 0,
			color : config.corFundo
		});

		bannerSuperior.add(labelSuperior);
		janela.add(bannerSuperior);
		janela.add(marca);
		janela.add(imagem);
		janela.add(botao);
		janela.open();
		
		botao.addEventListener('click', function(){
			var cadastro = require('janelaCadastro')();
			cadastro.criar();
		});
		
		imagem.start();
	};

	return self;
}

module.exports = formPrincipal; 