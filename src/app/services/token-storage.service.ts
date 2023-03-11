import { Injectable } from '@angular/core';
import { Profile } from '../helpers/interfaces';
import { ProfileService } from './profile.service';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private profileService: ProfileService) { }

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

  public saveUser(): void {
    this.profileService.getUserProfile().subscribe(profile => {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(profile));
      this.profileService.setProfile(profile);
    });

  }

  public getSessionUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log("getSessionUser: ", user);
    return user;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== undefined;
  }
}
