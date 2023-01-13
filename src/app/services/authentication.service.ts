import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';

const AUTH_API = environment.apiUrl
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  register(username: string, password: string, email: string, first_name: string, last_name: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/register/',
      { username, password, email, first_name, last_name },
      httpOptions);

  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/login/', { username, password }, httpOptions);
  }


}
