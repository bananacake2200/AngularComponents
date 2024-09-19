import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  amountInDollars: number | null = null;  
  amountInPeso: number | null = null;     

  conversionRate: number = 56;

  convertCurrency() {
    if (this.amountInDollars !== null) {
      this.amountInPeso = this.amountInDollars * this.conversionRate;
    }
  }
}
