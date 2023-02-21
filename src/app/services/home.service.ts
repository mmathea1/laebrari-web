import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../helpers/user';

const AUTH_API = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  // fetch user profile details
  getUserProfile(): Observable<User> {
    return this.http.get<User>(AUTH_API + 'profile');
  }

}
