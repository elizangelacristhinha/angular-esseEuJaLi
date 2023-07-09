import { Component, OnInit, ViewChild } from '@angular/core';

import { Constants } from 'src/app/util/constants';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { User } from './../model/user';
import { UserStorageService } from './user-storage.service';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserStorageService],
})
export class UserComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: User;
  users?: User[];

  userRepassword: string = '';

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private userService: UserStorageService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
  }



}
