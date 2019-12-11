import { Component, OnInit } from '@angular/core';
import { faBell, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  faSearch = faSearch;
  faBell = faBell;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}
