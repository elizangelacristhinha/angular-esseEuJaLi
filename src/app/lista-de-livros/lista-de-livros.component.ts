import { Component, OnInit } from '@angular/core';
import { ListaDeLivrosService } from './lista-de-livros.service';
import { ListaDeLivros } from './lista-de-livros';

@Component({
  selector: 'app-lista-de-livros',
  templateUrl: './lista-de-livros.component.html',
  styleUrls: ['./lista-de-livros.component.scss']
})
export class ListaDeLivrosComponent implements OnInit {

  public livros: ListaDeLivros[];

  constructor(private _listaDeLivrosService: ListaDeLivrosService) { }
 
  ngOnInit(): void {

    this._listaDeLivrosService.getListaDeLivros()
    .subscribe(
        retorno => {
          this.livros = retorno.map (iten =>
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
}