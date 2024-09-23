import { Product } from '../interfaces/Product';

export class WaterBottle implements Product {
  name = "Cool Water";
  price = 20;
  code = "A1";
  emoji = "💧";
  dispense(): void {
    console.log(`\n${this.emoji} Your ${this.name} is out! Stay hydrated. (₹${this.price})`);
  }
}