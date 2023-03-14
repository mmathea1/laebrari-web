import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  createBookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    memo: new FormControl(''),
    isbn: new FormControl(''),
    date_acquired: new FormControl(''),
    genre: new FormControl(''),
    available_to_borrow: new FormControl(''),
    available_to_sell: new FormControl(''),
    borrowing_price: new FormControl(''),
    selling_price: new FormControl(''),
    book_condition: new FormControl(''),
    library: new FormControl(''),
  });

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  submitBook(): void {
    console.log('book: ', this.createBookForm.value);
    this.bookService.createBook(this.createBookForm.value).subscribe({
      next: data => {
        console.log('book created: ', data);
      },
      error: error => {
        console.log('error creating book: ', error);
      }
    });
  }

}
