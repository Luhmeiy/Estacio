import { ControleEditora } from "../controle/ControleEditora";

interface LinhaLivroProps {
	livro: {
		codigo: number;
		codEditora: number;
		titulo: string;
		resumo: string;
		autores: string[];
	};

	excluir(id: number): void;
}

const controleEditora = new ControleEditora();

const LinhaLivro = (props: LinhaLivroProps) => {
	const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

	return (
		<tr>
			<td>
				{props.livro.titulo}
				<br />
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => props.excluir(props.livro.codigo)}
				>
					Excluir
				</button>
			</td>

			<td>{props.livro.resumo}</td>
			<td>{nomeEditora}</td>

			<td>
				<ul>
					{props.livro.autores.map((autor, index) => {
						return <li key={index}>{autor}</li>;
					})}
				</ul>
			</td>
		</tr>
	);
};

export default LinhaLivro;
