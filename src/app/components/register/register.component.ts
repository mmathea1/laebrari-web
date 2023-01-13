import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registrationForm!: FormGroup;
  public isSuccessful = false;
  public isSignUpFailed = false;
  private errorMessage = '';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.authenticationService.register(
      this.registrationForm.get('username')!.value,
      this.registrationForm.get('email')!.value,
      this.registrationForm.get('password')!.value,
      this.registrationForm.get('first_name')!.value,
      this.registrationForm.get('last_name')!.value
    ).subscribe(data => {
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    }, err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    });
  }

}
