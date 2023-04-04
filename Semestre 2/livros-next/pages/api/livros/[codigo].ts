import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "DELETE") {
			const codigo = Number(req.query.codigo);
			controleLivro.excluir(codigo);

			res.status(200).send({ mensagem: "Livro excluído com sucesso!" });
		} else {
			res.status(405).send("Método não permitido.");
		}
	} catch (err) {
		console.log(err);
		res.status(500).send("Exceção ocorrida no servidor.");
	}
}
