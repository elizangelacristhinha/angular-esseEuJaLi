import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username:string;
  public password:string;

  user!: User;
  public loginUser!: User;
  
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginUser = new User('', '');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  onLogin() {
    if (
      this.username === this.user.username &&
      this.password === this.user.password
    ) {
      this.loginService.login2(this.user.username);
    } else {
      alert(
        'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
      );
    }
  }
}
