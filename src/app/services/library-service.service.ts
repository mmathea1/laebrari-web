import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Library } from '../helpers/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  private library$ = new BehaviorSubject<Library>({
    id: 0,
    name: "",
    location: "",
    address: "",
    description: "",
    phone_number: "",
    email: "",
    date_established: "",
    established_by: "",
    type: "",
    librarian: 0
  });
  private selectedLibrary$ = this.library$.asObservable();
  libraryUrl = environment.apiUrl + 'library/';

  constructor(private http: HttpClient) { }

  createLibrary(data: any): Observable<any> {
    return this.http.post(this.libraryUrl, data);
  }

  setLibrary(library: Library) {
    this.library$.next(library);
  }

  getLibrary(): Observable<Library> {
    return this.selectedLibrary$;
  }
}
