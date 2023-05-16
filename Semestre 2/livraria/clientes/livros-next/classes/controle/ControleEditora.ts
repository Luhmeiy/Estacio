import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
	{ codEditora: 1, nome: "Alta Books" },
	{ codEditora: 2, nome: "Bookman" },
	{ codEditora: 3, nome: "Addison Wesley" },
	{ codEditora: 4, nome: "Pearson" },
];

export class ControleEditora {
	getNomeEditora = (codEditora: number) => {
		const editora = this.getEditoras().filter(
			(editora) => editora.codEditora === codEditora
		);

		return editora[0].nome;
	};

	getEditoras = () => {
		return editoras;
	};
}
