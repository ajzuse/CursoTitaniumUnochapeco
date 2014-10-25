Ti.include('../components/bd.js');

function criarJanela(_exitOnClose) {
	_exitOnClose = typeof _exitOnClose == 'undefined' 
	                                   ? false 
									   : _exitOnClose;
	
	janela = Ti.UI.createWindow({
		bottom : 0,
		left : 0,
		height : '100%',
		width : '100%',
		backgroundColor: '#f4f2e3',
		exitOnClose : _exitOnClose
	});

	esconderBarraJanela(janela);
	return janela;
}

function esconderBarraJanela(_janela) {
	_janela.addEventListener('open', function() {
		if (Ti.Platform.name == 'android')
			_janela.activity.actionBar.hide();
	});
}

( function(){
	var janelaPrincipal = require('forms/JanelaPrincipal')();
	janelaPrincipal.criar();
}());
