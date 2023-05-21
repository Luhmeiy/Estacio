import { Component, OnInit } from "@angular/core";
import { Editora } from "../editora";
import { Livro } from "../livro";
import { ControleEditoraService } from "../controle-editora.service";
import { ControleLivrosService } from "../controle-livros.service";

@Component({
    selector: "app-livro-lista",
    templateUrl: "./livro-lista.component.html",
    styleUrls: ["./livro-lista.component.css"],
})
export class LivroListaComponent implements OnInit {
    public editoras: Array<Editora> = [];
    public livros: Array<Livro> = [];

    constructor(
        private servEditora: ControleEditoraService,
        private servLivros: ControleLivrosService
    ) {}

    async ngOnInit() {
        await this.obterTodos();
    }

    obterTodos = async () => {
        await this.servLivros
            .obterLivros()
            .then((result) => (this.livros = result));
    };

    excluir = async (codigo: string) => {
        await this.servLivros
            .excluir(codigo)
            .then(async () => await this.obterTodos());
    };

    obterNome = (codEditora: number) => {
        return this.servEditora.getNomeEditora(codEditora);
    };
}
