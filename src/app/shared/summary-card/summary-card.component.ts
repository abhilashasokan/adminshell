import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { faCalendar, faClipboard, faComment, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {
  faDollarSign = faDollarSign;
  faCalendar = faCalendar;
  faClipboard = faClipboard;
  faComment = faComment;

  private _cardValue: string;
  private _isCardAmount: boolean;
  @Input() color: SummaryCardColor;
  @Input() cardText: string;
  @Input() set cardValue(value: string) {
    this._cardValue = value;
  }
  @Input() set isCardAmount(value: boolean) {
    this._isCardAmount = value;
  }
  @Input() cardIcon: string;

  constructor(private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
  }

  get showCardValue() {
    return this._isCardAmount ? this.currencyPipe.transform(this._cardValue, 'EUR', 'symbol-narrow', '4.2-2') : this._cardValue;
  }

  get isCardAmount() {
    return this._isCardAmount;
  }
}

export enum SummaryCardColor {
  PRIMARY = 'border-left-primary',
  SECONDARY = 'border-left-secondary',
  SUCCESS = 'border-left-success',
  DANGER = 'border-left-danger',
  INFO = 'border-left-info',
  WARNING = 'border-left-warning',
  LIGHT = 'border-left-light',
  DARK = 'border-left-dark',
}