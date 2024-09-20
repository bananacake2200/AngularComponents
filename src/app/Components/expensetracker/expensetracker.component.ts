interface Expense {
  category: string;
  amount: number;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-expensetracker',
  templateUrl: './expensetracker.component.html',
  styleUrl: './expensetracker.component.css'
})
export class ExpensetrackerComponent {
  expenses: Expense[] = [];
  category: string = '';
  amount: number | null = null;

  get totalExpenses(): number {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  addExpense(): void {
    if (this.category && this.amount) {
      this.expenses.push({ category: this.category, amount: this.amount });
      this.category = '';
      this.amount = null;
    }
  }

  get chartData(): any {
    const data = this.expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {} as { [key: string]: number });
    return {
      labels: Object.keys(data),
      datasets: [{
        data: Object.values(data),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      }]
    };
  }
}
