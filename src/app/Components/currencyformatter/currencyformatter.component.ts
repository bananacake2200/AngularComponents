import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  formattedDollar: string | null = null;
  formattedPhp: string | null = null;
  formattedEuro: string | null = null;

  formatCurrency(): void {
    if (this.amount !== null) {
      this.formattedDollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.amount);
      this.formattedPhp = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(this.amount);
      const euroConversionRate = 0.94; 
      this.formattedEuro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.amount * euroConversionRate);
    }
  }
}
