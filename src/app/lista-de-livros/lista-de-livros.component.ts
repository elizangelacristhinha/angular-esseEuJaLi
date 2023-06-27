import { Component, OnInit } from '@angular/core';
import { ListaDeLivrosService } from './lista-de-livros.service';
import { ListaDeLivros } from './lista-de-livros';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-de-livros',
  templateUrl: './lista-de-livros.component.html',
  styleUrls: ['./lista-de-livros.component.scss']
})
export class ListaDeLivrosComponent implements OnInit {

  public listaDeLivros: ListaDeLivros[];

  constructor(
    private router: Router, 
    private _listaDeLivrosService: ListaDeLivrosService,
    private userPromiseService: UserPromiseService
    ) { }

  ngOnInit(): void {
    this._listaDeLivrosService.getListaDeLivros()
    .subscribe(
        retorno => {
          this.listaDeLivros = retorno.map (iten =>
           {
                return new ListaDeLivros(
                   iten.id,
                   iten.titulo,
                   iten.autor
                )
            }
          )
        }
    ) 
  }
  visualizar(){
    this.router.navigate(['visualizarLivro']);

  }
}