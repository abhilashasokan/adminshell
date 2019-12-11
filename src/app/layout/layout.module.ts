import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../shared/shared.module';
import { FooterComponent } from './containers/components/footer/footer.component';
import { HeaderComponent } from './containers/components/header/header.component';
import { NavBarComponent } from './containers/components/nav-bar/nav-bar.component';
import { SidebarComponent } from './containers/components/sidebar/sidebar.component';
import { ShellComponent } from './containers/shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, NavBarComponent, ShellComponent],
  exports: [
    HeaderComponent, FooterComponent, SidebarComponent, NavBarComponent, ShellComponent
  ]
})
export class LayoutModule { }
