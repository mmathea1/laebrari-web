import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibraryServiceService } from 'src/app/services/library-service.service';

@Component({
  selector: 'app-create-library',
  templateUrl: './create-library.component.html',
  styleUrls: ['./create-library.component.css']
})
export class CreateLibraryComponent implements OnInit {

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

  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit(): void {
  }

  submitLibrary() {
    this.libraryService.createLibrary(this.createLibraryForm.value).subscribe((res) => {
    });

  }

}
