import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  submitBook(): void {
    this.bookService.createBook(this.createBookForm.value).subscribe({
      next: data => {
        var id = data.id;
        this.router.navigate(['book-detail', id]);
      },
      error: error => {
        console.log('error creating book: ', error);
      }
    });
  }

}
