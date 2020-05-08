import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;
  public user: User;
  public redirectUrl: string;

  constructor() {

  }

  public login(username: string, password: string): void {

  }

  public logout(): void {

  }
}
