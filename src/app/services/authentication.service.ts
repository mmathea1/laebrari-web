import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Token } from '@angular/compiler';

const AUTH_API = 'http://localhost:8000/'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }


  register(user: {}): Observable<any> {
    return this.http.post(AUTH_API + 'register/',
      user);

  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login/', { username, password });
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }


}
