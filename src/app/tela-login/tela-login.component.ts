import { Component, OnInit } from '@angular/core';
import { Constants } from '../util/constants';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';
import { UserService } from '../services/user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
})

export class TelaLoginComponent implements OnInit {
  user!: User;
  userP!: User;
  public loginUser: User;
  private errorMessage: string;

  constructor(private router : Router,
              private userService: UserService,
              private dataService: DataService)
              {}

  ngOnInit(): void {
    this.loginUser = new User('', '', '');
    this.user = new User('', '', '');
  }

  onLogin() {
    this.userService.getByUsername(this.loginUser.username)
                  .subscribe(data => this.user = data[0],
                  error => this.errorMessage = <any>error);
    console.log('nome: ' + this.user.username);

     this.user.username = this.user.login;
     this.user.password = this.user.senha;
    if (
      this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password

    ) {
      this.dataService.setUser(this.user);
      this.router.navigate(['/listaDeLivros']);
    } else {
      alert(
        'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
      );
    }
  }
}
