import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './containers/components/footer/footer.component';
import { HeaderComponent } from './containers/components/header/header.component';
import { AppComponent } from './containers/app/app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class LayoutModule { }
