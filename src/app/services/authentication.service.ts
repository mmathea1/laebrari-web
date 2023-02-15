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


  register(username: string, password: string, email: string, first_name: string, last_name: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/',
      { username, password, email, first_name, last_name });

  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login/', { username, password });
  }

  authenticate(username: string, password: string): any {
    let token: any;
    this.http.post(AUTH_API + '/api-token-auth/', { username, password }).subscribe(data => {
      token = data;
    });
    // { "username": username, "password": password }
    return localStorage.setItem('token', token);

  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }


}
