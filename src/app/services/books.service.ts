import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Book } from '../helpers/interfaces';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookUrl = environment.apiUrl + 'book/';

  constructor(private http: HttpClient) { }

  createBook(book: any): Observable<any> {
    return this.http.post<any>(this.bookUrl, book);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<any>(this.bookUrl + id);
  }
}
