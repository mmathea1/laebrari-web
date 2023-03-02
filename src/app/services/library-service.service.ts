import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  libraryUrl = environment.apiUrl + 'library/';

  constructor(private http: HttpClient) { }

  createLibrary(data: any): Observable<any> {
    return this.http.post(this.libraryUrl, data);
  }
}
