function abrirBaseDados() {
	return Ti.Database.open('BaseReceitas');
}

function tabelaExiste(_nomeTabela) {
	var sql = 'SELECT * FROM ' + _nomeTabela;
	var existe = true;
	var bd = abrirBaseDados();

	try {
		bd.execute(sql);
	} catch(e) {
		existe = false;
	}

	bd.close();

	return existe;
}

function executarBD(_sql) {
	var bd = abrirBaseDados();
	bd.execute(_sql);
	bd.close();
}

function validarBaseDados() {
	if (!tabelaExiste('Categoria')) {
		criarTabelas();
	}
}

function criarTabela(_nome, _campos) {
	var sql = 'CREATE TABLE ' + _nome + ' (';
	
	for (i in _campos){
		sql += _campos[i].nome + ' ' + _campos[i].tipo;
		
		if(i != _campos.length - 1) {
			sql += ',';
		}
	}
	
	sql += ');';
	
	executarBD(sql);
}

function criarTabelas() {
	var categoria = [{
		nome : 'id',
		tipo : 'INTEGER PRIMARY KEY'
	}, {
		nome : 'nome',
		tipo : 'TEXT'
	}];

	var receita = [{
		nome : 'id',
		tipo : 'INTEGER PRIMARY KEY'
	}, {
		nome : 'idCategoria',
		tipo : 'INTEGER'
	}, {
		nome : 'nome',
		tipo : 'TEXT'
	}, {
		nome : 'tempoPreparo',
		tipo : 'INTEGER'
	}, {
		nome : 'rendimento',
		tipo : 'INTEGER'
	}, {
		nome : 'nota',
		tipo : 'INTEGER'
	}, {
		nome : 'imagem',
		tipo : 'TEXT'
	}];

	var ingrediente = [{
		nome : 'id',
		tipo : 'INTEGER PRIMARY KEY'
	}, {
		nome : 'idReceita',
		tipo : 'INTEGER'
	}, {
		nome : 'nome',
		tipo : 'TEXT'
	}, {
		nome : 'quantidade',
		tipo : 'REAL'
	}, {
		nome : 'unidade',
		tipo : 'TEXT'
	}, {
		nome : 'aplicacao',
		tipo : 'TEXT'
	}];

	criarTabela('Categoria', categoria);
	criarTabela('Receita', receita);
	criarTabela('Ingrediente', ingrediente);
}
