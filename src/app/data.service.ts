import { Injectable } from '@angular/core';
import { ListaDeLivros } from './lista-de-livros/lista-de-livros';
import { Pontos } from './lista-de-livros/pontos';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private livro: ListaDeLivros;
  private user: User;
  private pontos: Pontos;

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

  setPontos(pontos: Pontos){
    this.pontos = pontos;
  }

  getPontos(){
    return this.pontos;
  }

}
