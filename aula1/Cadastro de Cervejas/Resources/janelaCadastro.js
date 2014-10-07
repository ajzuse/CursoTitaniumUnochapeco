function janelaCadastro(){
	var self = {};
	var janela;
	var bannerSuperior;
	var lblSuperior;
	var lblNome;
	var edtNome;
	var lblTipo;
	var edtTipo;
	var lblPais;
	var edtPais;
	var lblCaracteristicas;
	var edtCaracteristicas;
	var btnGravar;
	var btnCancelar;
	
	self.criar = function(){
		janela = Ti.UI.createWindow({
			width: '100%',
			height: '100%',
			top: 0,
			left: 0,
			backgroundColor: 'white'	
		});
		
		bannerSuperior = Ti.UI.createView({
			height : '10%',
			width : '100%',
			top : 0,
			left : 0,
			backgroundColor : config.corFundo
		});
		
		lblSuperior = Ti.UI.createLabel({
			text : 'Cadastro de Cervejas',
			textAlign : 'center',
			width : '100%',
			height : '100%',
			color : 'white'
		});
		
		lblNome = Ti.UI.createLabel({
			left: '2%',
			top: '12%',
			text: 'Nome',
			color: 'black'
		});
		
		edtNome = Ti.UI.createTextField({
			left: '2%',
			top: '18%',
			width: '96%',
			height: '10%',
			borderColor: config.corFundo
		});
		
		lblTipo = Ti.UI.createLabel({
			left: '2%',
			top: '28%',
			text: 'Tipo',
			color: 'black'
		});
		
		edtTipo = Ti.UI.createTextField({
			left: '2%',
			top: '31%',
			width: '96%',
			height: '10%',
			borderColor: config.corFundo
		});
		
		lblPais = Ti.UI.createLabel({
			left: '2%',
			top: '41%',
			text: 'País',
			color: 'black'
		});
		
		edtPais = Ti.UI.createTextField({
			left: '2%',
			top: '44%',
			width: '96%',
			height: '10%',
			borderColor: config.corFundo
		});
		
		lblCaracteristicas = Ti.UI.createLabel({
			left: '2%',
			top: '55%',
			text: 'Caracteristicas',
			color: 'black'
		});
		
		edtCaracteristicas = Ti.UI.createTextArea({
			left: '2%',
			top: '58%',
			width: '96%',
			height: '30%',
			borderColor: config.corFundo
		});
		
		btnCancelar = Ti.UI.createButton({
			left: '2%',
			bottom: '1%',
			width: '47%',
			height: '7%',
			color: 'white',
			backgroundColor: config.corFundo,
			title: 'Cancelar'
		});
		
		btnGravar = Ti.UI.createButton({
			right: '2%',
			bottom: '1%',
			width: '47%',
			height: '7%',
			color: 'white',
			backgroundColor: config.corFundo,
			title: 'Gravar'
		});
		
		bannerSuperior.add(lblSuperior);
		janela.add(bannerSuperior);
		janela.add(lblNome);
		janela.add(edtNome);
		janela.add(lblTipo);
		janela.add(edtTipo);
		janela.add(lblPais);
		janela.add(edtPais);
		janela.add(lblCaracteristicas);
		janela.add(edtCaracteristicas);
		janela.add(btnGravar);
		janela.add(btnCancelar);
		janela.open();
	};
	
	
	return self;
}

module.exports = janelaCadastro;
