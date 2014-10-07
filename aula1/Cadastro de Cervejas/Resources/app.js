var config = function() {
	var API = {
		isAndroid : Ti.Platform.name == 'android',
		corFundo : '#c0392b'
	};
	return API;
}();

var form = require('formPrincipal')();
 form.criar();
