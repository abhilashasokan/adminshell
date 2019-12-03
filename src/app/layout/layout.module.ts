import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './containers/components/footer/footer.component';
import { HeaderComponent } from './containers/components/header/header.component';
import { AppComponent } from './containers/app/app.component';
import {RouterModule} from '@angular/router';
import { SidebarComponent } from './containers/components/sidebar/sidebar.component';
import { NavBarComponent } from './containers/components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, NavBarComponent],
  exports: [
    HeaderComponent, FooterComponent, SidebarComponent, NavBarComponent
  ]
})
export class LayoutModule { }
