import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            res.setHeader('Content-Type', 'application/json');

            const codEditora = Number(req.query.codEditora);
            const nomeEditora = { "nome": controleEditora.getNomeEditora(codEditora) };

            res.status(200).send(JSON.stringify(nomeEditora));
        } catch (err) {
            console.log(err);
            res.status(500).send("Exceção ocorrida no servidor.");
        }
    } else {
        res.status(405).send("Método não permitido.");
    }
}