import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../Services/transaction-service';
import { CurrencyPipe } from '@angular/common';
import { TransactionModel } from '../Models/transaction.model';

@Component({
  imports: [FormsModule, CurrencyPipe],
  selector: 'app-expense-tracker',
  styleUrl: './expense-tracker.css',
  templateUrl: './expense-tracker.html',
})
export class ExpenseTracker {

  text = '';
  amount = 0;

  public service = inject(TransactionService);

  addTransaction() {
    if(!this.text || this.amount === 0) return;

    const transaction : TransactionModel = {
      id : Date.now(),
      text : this.text,
      amount : this.amount
    }
    this.service.add(transaction);
    this.text = '';
    this.amount = 0;
  }

  removeTransaction(id: number){
    this.service.remove(id);
  }
}
