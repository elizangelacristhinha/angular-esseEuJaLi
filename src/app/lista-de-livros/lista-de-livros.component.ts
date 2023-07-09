import { Component, OnInit } from '@angular/core';
import { ListaDeLivrosService } from './lista-de-livros.service';
import { ListaDeLivros } from './lista-de-livros';
import { Router } from '@angular/router';
import { Observable, Observer, Subject } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lista-de-livros',
  templateUrl: './lista-de-livros.component.html',
  styleUrls: ['./lista-de-livros.component.scss']
})
export class ListaDeLivrosComponent implements OnInit {

  public listaDeLivros: ListaDeLivros[];
  public livros: Observable<ListaDeLivros>;
  public visivel: boolean;
  public livro: { id: string, titulo: string, autor: string };

  constructor(
    private router: Router, 
    private _listaDeLivrosService: ListaDeLivrosService,
    private dataService: DataService
    ) { 

    }

  ngOnInit(): void {
    this.visivel = false;
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

  goToDetalhesByService(livro:ListaDeLivros){
    this.dataService.setLivro(livro);
    this.router.navigateByUrl('/visualizarLivro');
  }
}