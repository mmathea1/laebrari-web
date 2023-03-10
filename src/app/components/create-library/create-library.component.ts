import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryServiceService } from 'src/app/services/library-service.service';

@Component({
  selector: 'app-create-library',
  templateUrl: './create-library.component.html',
  styleUrls: ['./create-library.component.css']
})
export class CreateLibraryComponent implements OnInit {

  createLibraryForm = new FormGroup({
    name: new FormControl('meeren2'),
    location: new FormControl('meeren2'),
    address: new FormControl('meeren'),
    description: new FormControl('meeren'),
    phone_number: new FormControl('8932094275'),
    email: new FormControl('meeren@gmail.com'),
    date_established: new FormControl('2020-08-23'),
    established_by: new FormControl('meeren'),
    type: new FormControl('PUBLIC'),
  });

  constructor(private libraryService: LibraryServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  submitLibrary() {
    console.log(this.createLibraryForm.value);
    this.libraryService.createLibrary(this.createLibraryForm.value).subscribe({
      next: data => {
        this.router.navigate(['/view-library']);
      },
      error: error => {
        console.log(error);
      }
    });

  }

}
