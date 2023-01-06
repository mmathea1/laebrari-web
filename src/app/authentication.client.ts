import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {

    constructor(private http: HttpClient) { }

    public login(username: string, password: string): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/login', {
            username: username,
            password: password
        },
            { responseType: 'text' }
        );
    }

    public register(username: string, password: string): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/register', {
            username: username,
            password: password
        },
            { responseType: 'text' }
        );
    }

    ngOnInit(): void {
    }

}
