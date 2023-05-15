import { useEffect, useState } from "react";
import LinhaLivro from "./components/LinhaLivro";
import { ControleLivro } from "./controle/ControleLivros";

const controleLivro = new ControleLivro();

const LivroLista = () => {
	const [livros, setLivros] = useState();
	const [carregado, setCarregado] = useState(false);

	useEffect(() => {
		const obterTodos = async () => {
			await controleLivro
				.obterLivros()
				.then((resultado) => setLivros(resultado));

			setCarregado(true);
		};

		obterTodos();
	}, [carregado]);

	const excluir = (codigo) => {
		controleLivro.excluir(codigo).then(setCarregado(false));
	};

	return (
		<main className="w-75 text-start mx-auto">
			<h1>Catálogo de Livros</h1>

			<table className="table">
				<thead className="table-dark">
					<tr>
						<th>Título</th>
						<th>Resumo</th>
						<th>Editora</th>
						<th>Autores</th>
					</tr>
				</thead>

				<tbody>
					{carregado &&
						livros.map((livro, index) => (
							<LinhaLivro
								livro={livro}
								excluir={excluir}
								key={index}
							/>
						))}
				</tbody>
			</table>
		</main>
	);
};

export default LivroLista;
