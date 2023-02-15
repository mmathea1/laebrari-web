import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  user = {};

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.isAuthenticated();

    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getSessionUser();
      console.log(this.user);
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  title = 'laebrari-web';
}
