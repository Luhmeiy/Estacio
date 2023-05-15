const { obterLivros, incluir, excluir } = require("../modelo/livro-dao");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const livros = await obterLivros();

		res.json(livros);
	} catch (error) {
		res.status(500).json({ mensagem: "Falha ao obter os livros" });
	}
});

router.post("/", async (req, res) => {
	const livro = req.body;

	try {
		await incluir(livro);

		res.json({ mensagem: "Livro adicionado com sucesso" });
	} catch (error) {
		res.status(500).json({ mensagem: "Falha ao adicionar o livro" });
	}
});

router.delete("/:codigo", async (req, res) => {
	const codigo = req.params.codigo;

	try {
		await excluir(codigo);

		res.json({ mensagem: "Livro excluído com sucesso" });
	} catch (error) {
		res.status(500).json({ mensagem: "Falha ao excluir o livro" });
	}
});

module.exports = router;
