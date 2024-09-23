import { Product } from '../interfaces/Product';

export class SoftDrink implements Product {
  name = "Fizzy Cola";
  price = 35;
  code = "C3";
  emoji = "🥤";
  dispense(): void {
    console.log(`\n${this.emoji} Your ${this.name} is here! It's ice cold. (₹${this.price})`);
  }
}