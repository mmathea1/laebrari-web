import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  isAuthenticated = false;
  user = {};

  constructor(private tokenService: TokenStorageService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.isAuthenticated = !!this.tokenService.isAuthenticated();
    this.user = this.tokenService.getSessionUser();
    this.getUserProfile();

    if (this.isAuthenticated && this.user !== null) {
      this.isLoggedIn = true;
    }
  }

  getUserProfile() {
    this.homeService.getUserProfile().subscribe(data => {
      this.user = data;
      this.tokenService.saveUser(data);
    }, error => console.log(error));
  }

  logout(): void {
    this.tokenService.signOut();
    window.location.reload();
  }
  title = 'laebrari-web';
}
