import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });
  }

  public loginUser() {
    const username = this.loginForm.get('username')!.value;
    const password = this.loginForm.get('password')!.value
    console.log('username: ', username);
    this.authenticationService.login(username, password).subscribe(result => {
      console.log(result);
    }, err => {
      console.log('login failed because of: ', err);
    });
  }

}
