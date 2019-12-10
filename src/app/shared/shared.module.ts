import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SummaryCardComponent } from './summary-card/summary-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SummaryCardComponent],
  exports: [SummaryCardComponent]
})
export class SharedModule { }
