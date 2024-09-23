import { Product } from '../interfaces/Product';

export class ChocoBar implements Product {
  name = "Choco Delight";
  price = 25;
  code = "D4";
  emoji = "🍫";
  dispense(): void {
    console.log(`\n${this.emoji} Your ${this.name} is ready! Chocolatey goodness. (₹${this.price})`);
  }
}