import { Product } from '../interfaces/Product';

export class Chips implements Product {
  name = "Crunchy Chips";
  price = 30;
  code = "B2";
  emoji = "🥔";
  dispense(): void {
    console.log(`\n${this.emoji} Your ${this.name} dropped! Enjoy the crunch. (₹${this.price})`);
  }
}