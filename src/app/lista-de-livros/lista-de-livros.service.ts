import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaDeLivros } from './lista-de-livros';

@Injectable({
  providedIn: 'root'
})
export class ListaDeLivrosService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/livros";

  getListaDeLivros(): Observable<ListaDeLivros[]>
  {
    return this._httpClient.get<ListaDeLivros[]>(this.url);
  }

  getLivro(id: any): Observable<ListaDeLivros> 
  {
    return this._httpClient.get<ListaDeLivros>(`${this.url}/${id}`);
  }
}

