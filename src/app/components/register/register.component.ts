import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

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

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.authenticationService.register(
      this.registrationForm.value
    ).subscribe(data => {
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      this.router.navigate(['/login']);

    }, err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    });
  }

}
