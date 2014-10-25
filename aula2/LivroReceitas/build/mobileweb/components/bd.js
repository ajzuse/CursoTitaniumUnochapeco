function abrirBaseDados(){
	return Ti.Database.open('BaseReceitas');
}

function tabelaExiste(_nomeTabela){
	var sql = 'SELECT * FROM ' + _nomeTabela;
	var existe = true;
	var bd = abrirBaseDados();
	
	try{
		bd.execute(sql);
	} catch(e) {
		existe = false;
	}
	
	bd.close();
	
	return existe;
}
