import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LivroPromiseService } from './livro-promise.service';
import { ListaDeLivros } from '../lista-de-livros';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListaDeLivrosService } from '../lista-de-livros.service';
import { DataService } from 'src/app/data.service';

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
  public visivel: boolean;

  constructor(
    private livroPromiseService: LivroPromiseService,
    private router: Router, 
    private _listaDeLivrosService: ListaDeLivrosService,
    private dataService: DataService
    ) 
    
    {
      this.visivel = false;
    }

  ngOnInit(): void {
    this.livro = this.dataService.getLivro(); 
  }

  onClick(){
  }
  
  listarTodosLivros(){

  }

  listarLivroPorId(){

  }

  adicionarLivro(){

  }

  alterarLivro(){

  }

  excluirLivro(){
    
  }
}
