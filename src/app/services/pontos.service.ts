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

  update(pontos: Pontos){

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

  getRanking(): Observable<Pontos[]> {
    return this.httpClient.get<Pontos[]>(this.PONTOS);
  }
}
