import { Component, OnInit } from '@angular/core';
import { ListaDeLivrosService } from '../services/lista-de-livros.service';
import { ListaDeLivros } from './lista-de-livros';
import { Router } from '@angular/router';
import { PontosService } from 'src/app/services/pontos.service';
import { Observable, Observer, Subject } from 'rxjs';
import { DataService } from '../data.service';
import { Pontos } from './pontos';
import { User } from '../model/user';

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
  public user: User;
  public pontos: Pontos[];

  constructor(
    private router: Router, 
    private _listaDeLivrosService: ListaDeLivrosService,
    private pontosService: PontosService,
    private dataService: DataService
    ) {}

  ngOnInit(): void {
    this.user = this.dataService.getUser();
    console.log('usuario: ' + this.user.login);
    this.visivel = false;
    this._listaDeLivrosService.getListaDeLivros()
    .subscribe(
        retorno => {
          this.listaDeLivros = retorno.map (iten =>
           {
                return new ListaDeLivros(
                   iten.id,
                   iten.titulo,
                   iten.autor,
                   iten.descricao
                )
            }
          )
        }
    ) 

    this.pontosService.getByUsername(this.user.username)
    .subscribe(
        retorno => {
          this.pontos = retorno.map (iten =>
           {
                return new Pontos(
                   iten.id,
                   iten.login,
                   iten.pontos
                )
            }
          )
        }
    )
    console.log('Meu Pontos: ' + this.pontos[0].pontos);
  }

  goToDetalhesByService(livro:ListaDeLivros){
    this.dataService.setLivro(livro);
    this.dataService.setPontos(this.pontos[0]);
    this.router.navigateByUrl('/visualizarLivro');
  }

}