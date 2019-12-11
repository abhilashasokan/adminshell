import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/Authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Admin Shell';
  isAuthenticated: false;
  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.userIsLogged();
  }

  userIsLogged() {
    console.log(this.authenticationService.isAuthenticated());
    return this.authenticationService.isAuthenticated();
  }
}
