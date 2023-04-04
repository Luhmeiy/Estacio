import { ControleEditora } from './../../../classes/controle/ControleEditora';
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora();

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            res.setHeader('Content-Type', 'application/json');
            
            const editoras = controleEditora.getEditoras();
            res.status(200).send(JSON.stringify(editoras));
        } catch (err) {
            console.log(err);
            res.status(500).send("Exceção ocorrida no servidor.");
        }
    } else {
        res.status(405).send("Método não permitido.");
    }
}