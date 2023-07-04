import { Injectable } from '@angular/core';
import { ListaDeLivros } from './lista-de-livros/lista-de-livros';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private livro: ListaDeLivros;

  constructor() { }

  setLivro(livro:ListaDeLivros){
    this.livro = livro;
  }

  getLivro(){
    return this.livro;
  }
}
