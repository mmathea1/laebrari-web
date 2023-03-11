import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { HomeService } from './services/home.service';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  isAuthenticated = false;
  user = {};

  constructor(private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.isAuthenticated = !!this.tokenService.isAuthenticated();
    this.user = this.tokenService.getSessionUser();
    if (this.isAuthenticated && this.user !== null) {
      this.isLoggedIn = true;
    }
  }


  logout(): void {
    this.tokenService.signOut();
    window.location.reload();
  }
  title = 'laebrari-web';
}
