import { Component, OnInit } from "@angular/core";
import { Livro } from "../livro";
import { Editora } from "../editora";
import { ControleEditoraService } from "../controle-editora.service";
import { ControleLivrosService } from "../controle-livros.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-livro-dados",
    templateUrl: "./livro-dados.component.html",
    styleUrls: ["./livro-dados.component.css"],
})
export class LivroDadosComponent implements OnInit {
    public livro: Livro = new Livro(0, 0, "", "", []);
    public autoresForm: string = "";
    public editoras: Array<Editora> = [];

    private servEditora = new ControleEditoraService();
    private servLivros = new ControleLivrosService();

    constructor(private router: Router) {}

    ngOnInit() {
        this.editoras = this.servEditora.getEditoras();
    }

    incluir = () => {
        this.livro.autores = this.autoresForm.split("\n");
        this.servLivros.incluir(this.livro);

        this.router.navigateByUrl("/lista");
    };
}
