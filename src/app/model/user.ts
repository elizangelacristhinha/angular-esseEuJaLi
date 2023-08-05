//import { Transaction } from './transaction';

export class User {
  id: string;
  nome: string;
  login: string;
  senha: string;

  username: string;
  password: string;
  isAdmin: boolean;

  constructor(login: string, password: string, nome: string, isAdmin: boolean = false) {
    this.login = login;
    this.password = password;
    this.isAdmin = isAdmin;
    this.nome = nome;
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password, user.nome, user.isAdmin);
    u.nome = user.nome;
    return u;
  }


  public static toWS(user: User) {
    let u: User = new User(user.username, user.password, user.nome, user.isAdmin);
    u.nome = user.nome;
    return u;
  }
}
