import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from 'src/app/helpers/interfaces';
import { LibraryServiceService } from 'src/app/services/library-service.service';

@Component({
  selector: 'app-view-library',
  templateUrl: './view-library.component.html',
  styleUrls: ['./view-library.component.css']
})
export class ViewLibraryComponent implements OnInit {
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
  }

  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit(): void {
    this.libraryService.getLibrary().subscribe((library) => { this.library = library });
  }

}
