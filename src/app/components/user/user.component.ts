import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/helpers/user';
import { HomeService } from 'src/app/services/home.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm = new FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    phone_number: new FormControl(''),
    email: new FormControl(''),
    date_joined: new FormControl(''),
    profile_picture: new FormControl(''),
    address: new FormControl(''),
    bio: new FormControl(''),
  });
  user: User = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    date_joined: '',
    phone_number: '',
    bio: '',
    id: '',
    profile_picture: '',
  };

  constructor(private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.user = this.tokenService.getSessionUser();
    console.log(this.user);
  }


}
