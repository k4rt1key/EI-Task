import { Product } from './interfaces/Product';
import { ProductFactory } from './factories/ProductFactory';

export class VendingMachine {
  private balance: number = 0;
  private products: Product[];

  constructor() {
    this.products = [
      ProductFactory.createProduct('A1'),
      ProductFactory.createProduct('B2'),
      ProductFactory.createProduct('C3'),
      ProductFactory.createProduct('D4')
    ].filter((product): product is Product => product !== null);
  }

  public insertCoin(amount: number): void {
    this.balance += amount;
    console.log(`\n💰 Inserted ₹${amount}. Total: ₹${this.balance}`);
  }

  public selectProduct(code: string): void {
    const product = this.products.find(p => p.code.toLowerCase() === code.toLowerCase());
    if (product) {
      console.log(`\n🛒 You selected ${product.emoji} ${product.name}. Price: ₹${product.price}`);
      if (this.balance >= product.price) {
        this.balance -= product.price;
        product.dispense();
        console.log(`\n💰 Remaining balance: ₹${this.balance}`);
      } else {
        console.log(`\n❌ Not enough money. Please insert ₹${product.price - this.balance} more.`);
      }
    } else {
      console.log("\n❓ Invalid product code. Please try again.");
    }
  }

  public displayProducts(): void {
    console.log("\n🏪 Available Products:");
    console.log("┌────┬─────────────────┬─────────┐");
    console.log("│Code│ Product         │ Price   │");
    console.log("├────┼─────────────────┼─────────┤");
    this.products.forEach(product => {
      console.log(`│ ${product.code} │ ${product.emoji} ${product.name.padEnd(14)}│ ₹${product.price.toString().padStart(6)} │`);
    });
    console.log("└────┴─────────────────┴─────────┘");
  }

  public getBalance(): number {
    return this.balance;
  }
}
