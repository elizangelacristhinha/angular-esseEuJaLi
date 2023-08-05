import { Constants } from './constants';
import { User } from '../model/user';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }

    //usuário definido na forma literal
    let user = new User(Constants.USERNAME_KEY, '123', "as", true);

    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.COSTS_KEY, String(0));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));

    localStorage.removeItem(Constants.DONATION_KEY);
    localStorage.setItem(Constants.DONATION_KEY, JSON.stringify([]));
  }
}
