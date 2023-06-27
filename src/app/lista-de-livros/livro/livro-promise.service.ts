import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class LivroPromiseService {
  apiURL = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  listarTodosLivros() {
    this.httpClient.get(`${ this.apiURL }/livros`)
             .subscribe(resultado => console.log(resultado));
  }

  listarLivrosPorId() {
    this.httpClient.get(`${ this.apiURL }/livros/1`)
              .subscribe(resultado => console.log(resultado));
  }

  listarProdutoPorId() {
    this.httpClient.get(`${ this.apiURL }/livros/99`)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Livro não localizado.');
                  }
                }
              );
  }

  adicionarLivro() {
    var livro = { titulo : "" };
  
    this.httpClient.post(`${ this.apiURL }/livros`, livro)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro);
                  }
                }
              );
  }

  alterarLivro() {
    var livro = { id : 1, titulo : "Livro 1" };
  
    this.httpClient.put(`${ this.apiURL }/livros/1`, livro)
              .subscribe(
                resultado => {
                  console.log('Livro alterado com sucesso.')
                },
                erro => {
                  switch(erro.status) {
                    case 400:
                      console.log(erro.error.mensagem);
                      break;
                    case 404:
                      console.log('Livro não localizado.');
                      break;
                  }
                }
              );
  }

  excluirLivro() {
    this.httpClient.delete(`${ this.apiURL }/livros/1`)
              .subscribe(
                resultado => {
                  console.log('Livro excluído com sucesso.');
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Livro não localizado.');
                  }
                }
              );
  }
}
