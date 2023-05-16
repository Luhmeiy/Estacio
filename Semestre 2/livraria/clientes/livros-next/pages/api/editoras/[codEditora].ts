import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "GET") {
			const codEditora = Number(req.query.codEditora);
			const nomeEditora = {
				nome: controleEditora.getNomeEditora(codEditora),
			};

			res.status(200).json(nomeEditora);
		} else {
			res.status(405).json({ mensagem: "Método não permitido." });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ mensagem: "Exceção ocorrida no servidor." });
	}
}
