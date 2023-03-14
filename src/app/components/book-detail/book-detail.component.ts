import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Book } from 'src/app/helpers/interfaces';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book = {
    title: '',
    author: '',
    memo: '',
    isbn: '',
    date_acquired: '',
    genre: '',
    available_to_borrow: false,
    available_to_sell: false,
    borrowing_price: 0,
    selling_price: 0,
    book_condition: '',
    library: '',
    owner: ''
  };
  constructor(private route: ActivatedRoute, private bookService: BooksService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => this.bookService.getBook(+params['id'])))
      .subscribe(book => this.book = book);
  }



}
