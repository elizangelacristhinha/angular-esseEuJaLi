import { Component, OnInit, ViewChild } from '@angular/core';

import { Constants } from 'src/app/util/constants';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { User } from './../model/user';
import { UserStorageService } from './user-storage.service';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss'],
  providers: [UserStorageService]
})
export class CadastrarUsuarioComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  ret: Observable<User>;
  user: User;
  users?: User[];

  userRepassword: string = '';

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private userService: UserService) {
    this.user = new User('', '', '');
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.user = new User('', '', '');

    this.userService.getUsers()
    .subscribe(
        retorno => {
          this.users = retorno.map (iten =>
           {
                return new User(
                   iten.nome,
                   iten.username,
                   iten.login
                )
            }
          )
        }
    )

  }

  onSubmit() {
    this.isSubmitted = true;
    this.userService.adicionar(this.user);
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.user = new User('', '', '');

    this.userService.getUsers()
    .subscribe(
        retorno => {
          this.users = retorno.map (iten =>
           {
                return new User(
                   iten.nome,
                   iten.username,
                   iten.login
                )
            }
          )
        }
    )

  }

  onEdit(user: User) {
    //this.user = user;
    let clone = User.clone(user);
    this.user = clone;
  }

  onDelete(username: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + username
    );
    if (!confirmation) {
      return;
    }

  }
}
