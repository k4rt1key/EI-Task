// Investor.ts - Investor class implementing Observer
import { Observer } from "../interfaces/Observer";

export class Investor implements Observer {
  constructor(private name: string) {}

  update(price: number): void {
    console.log(`📢 ${this.name} notified: Stock price is now ₹${price}`);
  }
}
