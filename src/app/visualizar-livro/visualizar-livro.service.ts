import { DebugEventListener, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Constants } from 'src/app/util/constants';
import { Transaction } from './../model/transaction';
import { TransactionPromiseService } from './../services/transaction-promise.service';
import { User } from './../model/user';
import { UserPromiseService } from '../services/user-promise.service';
import { WebStorageUtil } from './../util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class VisualizarLivroService {
  userWS: User;

  constructor() {
    this.userWS = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  do(value: number, username: string): Promise<number> {
    const p = new Promise<number>((resolve, reject) => {

      let tax = value * Constants.TAX_DEPOSIT;
      let netValue = value - tax;

      let cost = parseFloat(localStorage.getItem(Constants.COSTS_KEY)!);
      let costBefore = cost;
      if (netValue < cost) {
        cost -= netValue;
        tax += netValue;
        netValue = 0;
      } else {
        netValue = netValue - cost;
        tax += cost;
        cost = 0;
      }

    });
    return p;
  }
}
