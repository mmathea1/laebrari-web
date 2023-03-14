import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Profile } from 'src/app/helpers/interfaces';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editProfileForm = new FormGroup({
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
    this.profileService.getProfile().subscribe((profile) => {
      this.profile = profile;
      console.log(this.profile);
    });
  }

}
