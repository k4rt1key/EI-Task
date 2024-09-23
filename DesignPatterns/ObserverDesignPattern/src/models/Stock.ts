// Stock.ts - Stock class (Subject)
import { Observer } from "../interfaces/Observer";

export class Stock {
  private observers: Observer[] = [];
  private price: number;

  constructor(public stockName: string, price: number) {
    this.price = price;
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this.price));
  }

  setPrice(newPrice: number): void {
    this.price = newPrice;
    console.log(`💰 New stock price of ${this.stockName}: ₹${this.price}`);
    this.notifyObservers();
  }
}
