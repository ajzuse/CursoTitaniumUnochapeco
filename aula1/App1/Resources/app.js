Ti.App.addEventListener('NomeDoEvento', function(e){
	//alert('Nome: ' + e.Nome + ' Idade: ' + e.Idade);
	//Ti.API.info - Mostra mensagem no console do Titanium
	//JSON.stringify - Transforma um objeto em uma String
	Ti.API.info(JSON.stringify(e));
});

var janela = Ti.UI.createWindow({
	width: '100%',
	height: '100%',
	backgroundColor: 'gray',
	exitOnClose: true
});

var viewSuperior = Ti.UI.createView({
	width: '100%',
	height: '10%',
	top: 0,
	left: 0,
	backgroundColor: 'white'
});

viewSuperior.addEventListener('click', function(){
	alert('Clicou na view Superior!');
});

var viewInferiorEsquerda = Ti.UI.createView({
	width: '50%',
	height: '10%',
	bottom: 0,
	left: 0,
	backgroundColor: 'blue'
});

viewInferiorEsquerda.addEventListener('click', function(){
	Ti.UI.createAlertDialog({
		title: 'Alerta',
		message: 'Você clicou na view inferior esquerda!',
		buttonNames: ['Banana', 'Potato', 'Lemmon']
	}).show();
});

var viewInferiorDireita = Ti.UI.createView({
	width: '50%',
	height: '10%',
	bottom: 0,
	right: 0,
	backgroundColor: 'black'
});

function evento(){
	//alert('Passou por função');
	Ti.App.fireEvent('NomeDoEvento', {Nome: 'Andrei', Idade: 22});
}

viewInferiorDireita.addEventListener('click', evento);

janela.add(viewSuperior);
janela.add(viewInferiorEsquerda);
janela.add(viewInferiorDireita);

janela.open();
