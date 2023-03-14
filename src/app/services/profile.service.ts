import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../helpers/interfaces';
import { HttpClient } from '@angular/common/http';

const AUTH_API = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile$ = new BehaviorSubject<Profile>({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    date_joined: '',
    phone_number: '',
    bio: '',
    id: '',
    profile_picture: '',
  });
  currentProfile$ = this.profile$.asObservable();

  constructor(private http: HttpClient) { }

  setProfile(profile: Profile) {
    this.profile$.next(profile);
  }

  getProfile(): Observable<Profile> {
    return this.currentProfile$;
  }

  // fetch user profile details
  getUserProfile(): Observable<Profile> {
    return this.http.get<Profile>(AUTH_API + 'profile');
  }
}
