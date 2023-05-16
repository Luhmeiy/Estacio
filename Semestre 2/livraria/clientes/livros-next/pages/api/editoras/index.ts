import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "@/classes/controle/ControleEditora";

export const controleEditora = new ControleEditora();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method === "GET") {
			const editoras = controleEditora.getEditoras();
			res.status(200).json(editoras);
		} else {
			res.status(405).json({ mensagem: "Método não permitido." });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ mensagem: "Exceção ocorrida no servidor." });
	}
}
