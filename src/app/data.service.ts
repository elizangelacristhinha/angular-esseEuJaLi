import { Injectable } from '@angular/core';
import { ListaDeLivros } from './lista-de-livros/lista-de-livros';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private livro: ListaDeLivros;
  private user: User;

  constructor() { }

  setLivro(livro:ListaDeLivros){
    this.livro = livro;
  }

  getLivro(){
    return this.livro;
  }

  setUser(user:User){
    this.user = user;
  }

  getUser(){
    return this.user;
  }
}
