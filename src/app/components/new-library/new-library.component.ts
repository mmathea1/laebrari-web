import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Library } from 'src/app/helpers/interfaces';
import { LibraryServiceService } from 'src/app/services/library-service.service';

@Component({
  selector: 'app-new-library',
  templateUrl: './new-library.component.html',
  styleUrls: ['./new-library.component.css']
})
export class NewLibraryComponent implements OnInit {
  library: Library = {
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
  };
  createLibraryForm = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl(''),
    phone_number: new FormControl(''),
    email: new FormControl(''),
    date_established: new FormControl(''),
    established_by: new FormControl(''),
    type: new FormControl(''),
  });

  constructor(private libraryService: LibraryServiceService, private router: Router) { }

  ngOnInit(): void { }

  submitLibrary() {
    this.libraryService.createLibrary(this.createLibraryForm.value).subscribe({
      next: data => {
        this.libraryService.setLibrary(data);
        this.router.navigate(['/view-library']);
      },
      error: error => {
        console.log(error);
      }
    });

  }

}
