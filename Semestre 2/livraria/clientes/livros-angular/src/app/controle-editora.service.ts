import { Injectable } from "@angular/core";
import { Editora } from "./editora";

@Injectable({
    providedIn: "root",
})
export class ControleEditoraService {
    constructor() {}

    editoras: Array<Editora> = [
        { codEditora: 1, nome: "Alta Books" },
        { codEditora: 2, nome: "Bookman" },
        { codEditora: 3, nome: "Addison Wesley" },
        { codEditora: 4, nome: "Pearson" },
    ];

    getNomeEditora = (codEditora: number) => {
        const editora = this.getEditoras().filter(
            (editora) => editora.codEditora === codEditora
        );

        return editora[0].nome;
    };

    getEditoras = () => {
        return this.editoras;
    };
}
