function Banner() {
	var self = {};
	var view;
	var label;
	var voltar;

	self.criar = function(_nome, _mostrarVoltar) {
		_mostrarVoltar = typeof _mostrarVoltar == 'undefined' ? true : _mostrarVoltar;
		
		view = Ti.UI.createView({
			top: 0,
			left: 0,
			width: '100%',
			height: '10%',
			backgroundColor: '#e74c3c'
		});
		
		label = Ti.UI.createLabel({
			//left: _mostrarVoltar ? '30%' : 0,
			//width: _mostrarVoltar ? '70%': '100%',
			text: _nome,
			textAlign: 'center',
			color: 'white'
		});
		
		view.add(label);
		
		if(_mostrarVoltar){
			voltar = Ti.UI.createLabel({
				left: 0,
				width: '30%',
				text: '<',
				textAlign: 'center',
				color: 'white',
				font: {
					fontSize: 40
				}
			});
			
			view.add(voltar);
		}
	};

	self.view = function() {
		return view;
	};

	self.onVoltar = function(_evento) {
//		if ( typeof voltar != 'undefined')
			voltar.addEventListener('click', _evento);
	};

	return self;
}

module.exports = Banner;
