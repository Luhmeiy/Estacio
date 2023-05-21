import { Injectable } from "@angular/core";
import { Livro } from "./livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

@Injectable({
    providedIn: "root",
})
export class ControleLivrosService {
    async obterLivros() {
        try {
            const resposta = await fetch(baseURL);
            const livrosJSON: LivroMongo[] = await resposta.json();

            const livros = livrosJSON.map((livro) => {
                return new Livro(
                    livro._id!,
                    livro.codEditora,
                    livro.titulo,
                    livro.resumo,
                    livro.autores
                );
            });

            return livros;
        } catch (error) {
            throw error;
        }
    }

    async excluir(codigo: string) {
        try {
            const resposta = await fetch(`${baseURL}/${codigo}`, {
                method: "DELETE",
            });
            const resultado = await resposta.json();

            return resultado.ok;
        } catch (error) {
            throw error;
        }
    }

    async incluir(livro: Livro) {
        try {
            const LivroMongo = {
                _id: livro.codigo,
                codEditora: livro.codEditora,
                titulo: livro.titulo,
                resumo: livro.resumo,
                autores: livro.autores,
            };

            const resposta = await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(LivroMongo),
            });
            const resultado = await resposta.json();

            return resultado.ok;
        } catch (error) {
            throw error;
        }
    }
}
