import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseTracker } from './expense-tracker/expense-tracker';

@Component({
  imports: [ExpenseTracker],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MyExpenseTracker');
}
