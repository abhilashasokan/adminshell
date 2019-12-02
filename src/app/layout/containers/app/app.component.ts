import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/Authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin Shell';
  isAuthenticated: false;
  constructor(private authenticationService: AuthenticationService) {

  }

  userIsLogged() {
    return this.authenticationService.isAuthenticated();
  }
}
