import { ControleLivro } from "@/classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivro();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "GET") {
			const livros = controleLivro.obterLivros();
			res.status(200).send(JSON.stringify(livros));
		} else if (req.method === "POST") {
			const livro = {
				codigo: req.body.codigo,
				codEditora: req.body.codEditora,
				titulo: req.body.titulo,
				resumo: req.body.resumo,
				autores: req.body.autores,
			};
			controleLivro.incluir(livro);

			res.status(200).send({ mensagem: "Livro criado com sucesso!" });
		} else {
			res.status(405).send("Método não permitido.");
		}
	} catch (err) {
		console.log(err);
		res.status(500).send("Exceção ocorrida no servidor.");
	}
}
