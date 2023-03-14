import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });
  }

  public loginUser() {
    const username = this.loginForm.get('username')!.value;
    const password = this.loginForm.get('password')!.value
    this.authenticationService.login(username, password).subscribe(result => {
      this.profileService.setProfile(result['user']);
      this.tokenStorageService.saveUser(result['user']);
      localStorage.setItem('token', result['token']);
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });;
    }, err => {
      console.log('login failed because of: ', err);
    });
  }

}
