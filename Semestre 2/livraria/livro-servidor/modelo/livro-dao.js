const Livro = require("./livro-schema");

const obterLivros = async () => {
	try {
		const livros = await Livro.find();

		return livros;
	} catch (error) {
		throw "Erro ao obter os livros";
	}
};

const incluir = async (livro) => {
	try {
		await Livro.create(livro);
	} catch (error) {
		throw "Erro ao adicionar o livro";
	}
};

const excluir = async (codigo) => {
	try {
		await Livro.deleteOne({ _id: codigo });
	} catch (error) {
		throw "Erro ao excluir o livro";
	}
};

module.exports = {
	obterLivros,
	incluir,
	excluir,
};
