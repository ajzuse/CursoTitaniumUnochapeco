function DescricaoReceita(){
	var self = {};
	var view;
	var lblCategoria;
	var lblTempoPreparo;
	var lblRendimento;
	var lblNota;
	var edtCategoria;
	var edtTempoPreparo;
	var edtRendimento;
	var edtNota;
	var imagem;
	
	// Quando não houver id no criar
    // será um cadastro
	self.criar = function (_idReceita){
		view = Ti.UI.createView({
			width: '100%',
			height: '100%',
			top: 0,
			left: 0
		});
		
		lblCategoria = Ti.UI.createLabel({
			top: '2%',
			left: '2%',
			height: '5%',
			width: '47%',
			text: 'Categoria:'
		});
		
		edtCategoria = Ti.UI.createTextField({
			top: '7%',
			left: '2%',
			height: '7%',
			width: '47%'
		});
		
		lblTempoPreparo = Ti.UI.createLabel({
			top: '15%',
			left: '2%',
			height: '5%',
			width: '47%',
			text: 'Tempo de Preparo:'
		});
		
		edtTempoPreparo = Ti.UI.createTextField({
			top: '20%',
			left: '2%',
			height: '7%',
			width: '47%'
		});
		
		lblRendimento = Ti.UI.createLabel({
			top: '28%',
			left: '2%',
			height: '5%',
			width: '47%',
			text: 'Rendimento:'
		});
		
		edtRendimento = Ti.UI.createTextField({
			top: '33%',
			left: '2%',
			height: '7%',
			width: '47%'
		});
		
		lblNota = Ti.UI.createLabel({
			top: '41%',
			left: '2%',
			height: '5%',
			width: '47%',
			text: 'Nota:'
		});
		
		edtNota = Ti.UI.createTextField({
			top: '46%',
			left: '2%',
			height: '7%',
			width: '47%'
		});
		
		imagem = Ti.UI.createImageView({
			right: '2%',
			top: '2%',
			width: '47%',
			image: 'http://revistambientesce.com.br/imagens/sem-foto.gif'
		});
		
		view.add(lblCategoria);
		view.add(edtCategoria);
		view.add(lblNota);
		view.add(edtNota);
		view.add(lblRendimento);
		view.add(edtRendimento);
		view.add(lblTempoPreparo);
		view.add(edtTempoPreparo);
		view.add(imagem);
		
		if (typeof _idReceita == 'undefined'){
			bloquearCampos();
			carregarDados();
		}
	};
	
	self.view = function(){
		return view;
	};
	
	function bloquearCampos(){
		edtCategoria.setEnabled(false);
		edtNota.setEnabled(false);
		edtRendimento.setEnabled(false);
		edtTempoPreparo.setEnabled(false);
	}
	
	function carregarDados(_idReceita){
		edtCategoria.setValue('Carnes');
		edtNota.setValue('5');
		edtRendimento.setValue('7 porções');
		edtTempoPreparo.setValue('90 minutos');
	}
	
	return self;
}

module.exports = DescricaoReceita;