import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  logout() {
    this.auth.logout();
  }
}
