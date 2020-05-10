import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(model): boolean {

    if (model.username === 'chitto' && model.password === '123456') {
      localStorage.setItem('username', model.username);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  {provider: AuthService, useClass: AuthService},
];
