import { Injectable } from '@angular/core';
import { User } from '../helpers/interfaces';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getSessionUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    return user;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== undefined;
  }
}
