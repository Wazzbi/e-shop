import { AuthService } from './../auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
