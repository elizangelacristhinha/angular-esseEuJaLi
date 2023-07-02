import { Component, OnInit } from '@angular/core';
import { LivroPromiseService } from './livro-promise.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})

export class LivroComponent implements OnInit {

  livro: { id: string, titulo: string, autor: string }
  constructor(private livroPromiseService: LivroPromiseService) { }
  //user!: User;
  //users?: User[];
  //livros: Livros[];
  ngOnInit(): void {
    this.livro = {
      id: '4',
      titulo: 'Titulo 4',
      autor: 'Autor 4'
    }
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
