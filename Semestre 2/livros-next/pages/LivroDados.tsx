// classes / components
import { ControleEditora } from "@/classes/controle/ControleEditora";
import { ControleLivro } from "@/classes/controle/ControleLivros";
import { Livro } from "@/classes/modelo/Livro";
import { Menu } from "@/componentes/Menu";

// React / Next
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

// styles
import styles from "@/styles/Home.module.css";

const controleEditora = new ControleEditora();
const baseURL = "http://localhost:3000/api/livros";

const incluirLivro = async (livro: Livro) => {
	await fetch(baseURL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(livro),
	})
		.then((results) => console.log("Sucesso!"))
		.catch((err) => console.log(err));
};

const LivroDados: NextPage = () => {
	const editoras = controleEditora.getEditoras();
	const opcoes = editoras.map((editora) => ({
		value: editora.codEditora,
		text: editora.nome,
	}));

	const [titulo, setTitulo] = useState("");
	const [resumo, setResumo] = useState("");
	const [autores, setAutores] = useState("");
	const [codEditora, setCodEditora] = useState(opcoes[0].value);

	const router = useRouter();

	const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
		setCodEditora(+evento.target.value);
	};

	const incluir = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();

		const livro = {
			codigo: 0,
			codEditora: codEditora,
			titulo: titulo,
			resumo: resumo,
			autores: autores.split("\n"),
		};

		incluirLivro(livro);

		router.push("/LivroLista");
	};

	return (
		<>
			<Head>
				<title>Loja Next</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Menu />

			<main className={styles.main}>
				<h1 className={styles.title}></h1>

				<form onSubmit={(e) => incluir(e)}>
					<div className="mb-3">
						<label htmlFor="titulo" className="form-label">
							Título
						</label>

						<input
							type="text"
							id="titulo"
							onChange={(e) => setTitulo(e.target.value)}
							className="form-control"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="resumo" className="form-label">
							Resumo
						</label>

						<textarea
							id="resumo"
							onChange={(e) => setResumo(e.target.value)}
							className="form-control"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="editora" className="form-label">
							Editora
						</label>

						<select
							name="cars"
							id="cars"
							onChange={(e) => tratarCombo(e)}
							className="form-control"
						>
							{opcoes.map((opcao) => {
								return (
									<option
										key={opcao.value}
										value={opcao.value}
									>
										{opcao.text}
									</option>
								);
							})}
						</select>
					</div>

					<div className="mb-3">
						<label htmlFor="autores" className="form-label">
							Autores (1 por linha)
						</label>

						<textarea
							id="autores"
							onChange={(e) => setAutores(e.target.value)}
							className="form-control"
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Salvar Dados
					</button>
				</form>
			</main>
		</>
	);
};

export default LivroDados;
