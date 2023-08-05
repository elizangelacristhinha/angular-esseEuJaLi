import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ErrorUtil } from './../util/error-util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesAPI } from './../util/routes-api';
import { User } from './../model/user';
import { Constants } from 'src/app/util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users!: User[];
  ret: Observable<User>;
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getByUsername(username: string): Observable<User[]> {
    const query: HttpParams = new HttpParams().set('login', username);
    const options = username ? { params: query } : {};

    return this.httpClient.get<User[]>(`${RoutesAPI.USERS}`, options).pipe(
      //map((users: User[])=>users[0]),
      catchError(ErrorUtil.handleError)
    );
  }

  patch(user: User): Observable<User> {
    return this.httpClient.patch<User>(
      `${RoutesAPI.USERS}/${user.id}`,
      user,
      this.httpOptions
    );;
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(
      `${RoutesAPI.USERS}/${user.id}`,
      user,
      this.httpOptions
    );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(RoutesAPI.USERS);
  }

  adicionar(user: User) {
    this.httpClient.post(`${ RoutesAPI.USERS }`, user)
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
}
