import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesAPI } from '../util/routes-api';
import { Pontos } from '../lista-de-livros/pontos';
import { ErrorUtil } from './../util/error-util';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PontosService {
  public readonly PONTOS='http://localhost:3000/pontos';
  public retorno: Observable<Pontos>;
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    
  };

  getByUsername(login: string): Observable<Pontos[]> {
    const query: HttpParams = new HttpParams().set('login', login);
    const options = login ? { params: query } : {};

    return this.httpClient.get<Pontos[]>(`${this.PONTOS}`, options).pipe(catchError(ErrorUtil.handleError));
  }

  update2(pontos: Pontos): Observable<Pontos> {
    
    this.retorno = this.httpClient.put<Pontos>(`${this.PONTOS}/${pontos.id}`, pontos, this.httpOptions);
    return this.retorno;
  }
  update(pontos: Pontos){
    //var pontosTmp = { id : pontos.id, pontos : pontos.pontos };

    this.httpClient.put(`${ this.PONTOS }/${ pontos.id }`, pontos)
            .subscribe(
              resultado => {
                console.log('Pontos alterado com sucesso.')
              },
              erro => {
                switch(erro.status) {
                  case 400:
                    console.log(erro.error.mensagem);
                    break;
                  case 404:
                    console.log('Pontos não localizado.');
                    break;
                }
              }
            );
  }
  /*
  https://www.devmedia.com.br/angular-http-como-realizar-requisicoes-em-suas-aplicacoes/40642
  alterarProduto() {
  var produto = { id : 1, nome : "Smart TV 50 Polegadas" };


  this.http.put(`${ this.apiURL }/produtos/1`, produto)
            .subscribe(
              resultado => {
                console.log('Produto alterado com sucesso.')
              },
              erro => {
                switch(erro.status) {
                  case 400:
                    console.log(erro.error.mensagem);
                    break;
                  case 404:
                    console.log('Produto não localizado.');
                    break;
                }
              }
            );
}
  */
}
