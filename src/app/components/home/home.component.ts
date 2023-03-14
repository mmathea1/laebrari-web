import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/helpers/interfaces';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile: Profile = {
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


  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }


}
