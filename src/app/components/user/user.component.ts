import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/helpers/interfaces';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
  }

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((profile) => {
      this.profile = profile; 
    });
  }




}
