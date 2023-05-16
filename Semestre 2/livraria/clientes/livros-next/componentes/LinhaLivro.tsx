import { ControleEditora } from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";

interface LinhaLivroProps {
	livro: Livro;
	excluir(id: string): void;
}

const controleEditora = new ControleEditora();

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
	const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

	return (
		<tr>
			<td>
				{props.livro.titulo}
				<br />
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => props.excluir(props.livro.codigo!)}
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
