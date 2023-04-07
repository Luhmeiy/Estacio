import { useState } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
	const opcoes = controleEditora
		.getEditoras()
		.map((editora) => ({ value: editora.codEditora, text: editora.nome }));

	const [titulo, setTitulo] = useState("");
	const [resumo, setResumo] = useState("");
	const [autores, setAutores] = useState("");
	const [codEditora, setCodEditora] = useState(opcoes[0].value);

	const navigate = useNavigate();

	const tratarCombo = (evento) => {
		const value = Number(evento.target.value);
		setCodEditora(value);
	};

	const incluir = (evento) => {
		evento.preventDefault();

		const livro = {
			codigo: 0,
			codEditora: codEditora,
			titulo: titulo,
			resumo: resumo,
			autores: autores.split("\n"),
		};

		controleLivro.incluir(livro);

		navigate("/");
	};

	return (
		<main className="w-75 text-start mx-auto">
			<h1>Dados do Livro</h1>

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
								<option key={opcao.value} value={opcao.value}>
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
	);
};

export default LivroDados;
