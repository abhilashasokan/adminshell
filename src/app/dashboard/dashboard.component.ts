import { Component, OnInit } from '@angular/core';
import { SummaryCardColor } from './../shared/summary-card/summary-card.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public summaryCardColor = SummaryCardColor;
  constructor() { }

  ngOnInit() {
  }

}
