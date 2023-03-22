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

const LinhaLivro = ({ livro, excluir }: LinhaLivroProps) => {
	const controleEditora = new ControleEditora();
	const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

	return (
		<tr>
			<td>
				{livro.titulo}
				<br />
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => excluir(livro.codigo)}
				>
					Excluir
				</button>
			</td>

			<td>{livro.resumo}</td>
			<td>{nomeEditora}</td>

			<td>
				<ul>
					{livro.autores.map((autor, index) => {
						return <li key={index}>{autor}</li>;
					})}
				</ul>
			</td>
		</tr>
	);
};

export default LinhaLivro;
