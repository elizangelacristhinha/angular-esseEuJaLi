import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LivroPromiseService } from './livro-promise.service';
import { ListaDeLivros } from '../lista-de-livros';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListaDeLivrosService } from '../../services/lista-de-livros.service';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/user';
import { PontosService } from 'src/app/services/pontos.service';
import { Pontos } from '../pontos';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})

export class LivroComponent implements OnInit {

 @Input() public livro: ListaDeLivros;
  public listaDeLivros: ListaDeLivros[];
  public retorno: ListaDeLivros[];
  public livros: Observable<ListaDeLivros>;
  public user: User;
  public pontos: Pontos[];
  public retPontos: Pontos;
  public numPontos : number;
  private errorMessage: string;

  constructor(
    private router: Router, 
    private listaDeLivrosService: ListaDeLivrosService,
    private pontosService: PontosService,
    private dataService: DataService
    ) 
    {
      
    }

  ngOnInit(): void {
    this.livro = this.dataService.getLivro(); 
    this.user = this.dataService.getUser();
    this.retPontos = this.dataService.getPontos();
    //console.log('usuario: ' + this.user.nome);

    this.numPontos = this.retPontos.pontos;
  }

  marcarLido(livro: ListaDeLivros){
    //console.log('esse eu já li: ' + livro.titulo);
    //console.log('username: ' + this.user.username);
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
    //console.log('Meus pontos: ' + this.pontos[0].pontos);
    this.pontos[0].pontos ++;
    //console.log('Nova pontuação: ' + this.pontos[0].pontos);
    this.pontosService.update(this.pontos[0]);
    //console.log("Atualização realizada com sucesso!");
    this.numPontos = this.pontos[0].pontos;
  }
}
