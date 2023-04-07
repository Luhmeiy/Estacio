import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "@/classes/controle/ControleLivros";

export const controleLivro = new ControleLivro();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "GET") {
			const livros = controleLivro.obterLivros();
			res.status(200).json(livros);
		} else if (req.method === "POST") {
			const livro = req.body;
			controleLivro.incluir(livro);

			res.status(200).json({ mensagem: "Livro criado com sucesso!" });
		} else {
			res.status(405).json({ mensagem: "Método não permitido." });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ mensagem: "Exceção ocorrida no servidor." });
	}
}
