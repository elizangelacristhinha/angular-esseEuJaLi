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

 // @Input() livro: { id: string, titulo: string, autor: string }
 @Input() public livro: ListaDeLivros;
  public listaDeLivros: ListaDeLivros[];
  public retorno: ListaDeLivros[];
  public livros: Observable<ListaDeLivros>;
  public visivel: boolean;
  
  public cont:number = 0;
  public livros1: ListaDeLivros;

  @Input() idLivro: any;
  @Input('account-id') id: string;
  @Output() aoTransferir = new EventEmitter<any>();

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
    console.log('-------------------');
    this.livro = this.dataService.getLivro(); 
    console.log("id" + this.livro.id);

  }

  onClick(){
    console.log('onclick');
  }
  
  listarTodosLivros(){

  }

  listarLivroPorId(){
    this.livroPromiseService.listarProdutoPorId();
  }

  adicionarLivro(){

  }

  alterarLivro(){

  }

  excluirLivro(){
    
  }
}
