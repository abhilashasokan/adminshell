import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SummaryCardComponent } from './summary-card/summary-card.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [SummaryCardComponent],
  exports: [SummaryCardComponent],
  providers: [CurrencyPipe]
})
export class SharedModule { }
