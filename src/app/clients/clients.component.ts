import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

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
