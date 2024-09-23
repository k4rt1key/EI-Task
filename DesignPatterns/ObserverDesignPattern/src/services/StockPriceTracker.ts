// StockPriceTracker.ts - Interactive service for tracking stock prices
import { Stock } from "../models/Stock";
import { Investor } from "../models/Investor";
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class StockPriceTracker {
  private stock: Stock;
  private investors: Investor[] = [];

  constructor(stockName: string, initialPrice: number) {
    this.stock = new Stock(stockName, initialPrice);
  }

  addInvestor(name: string): void {
    const investor = new Investor(name);
    this.investors.push(investor);
    this.stock.addObserver(investor);
    console.log(`👤 Investor ${name} subscribed to ${this.stock.stockName}.`);
  }

  updatePrice(newPrice: number): void {
    this.stock.setPrice(newPrice);
  }

  start() {
    console.log("📈 Tip: Add an investor first to send notification about stock price updation \n");
    this.mainMenu();
  }

  private mainMenu() {
    console.log("\nSelect an action:");
    console.log("1️⃣ Add Investor");
    console.log("2️⃣ Update Stock Price");
    console.log("3️⃣ Exit");
    
    readline.question("Your choice: ", (choice: string) => {
      switch (choice) {
        case "1":
          readline.question("Enter investor name: ", (name: string) => {
            this.addInvestor(name);
            this.mainMenu();
          });
          break;
        case "2":
          readline.question(`Enter new price for ${this.stock.stockName}: ₹`, (newPrice: string) => {
            this.updatePrice(Number(newPrice));
            this.mainMenu();
          });
          break;
        case "3":
          console.log("Thank you for using Stock Price Tracker! 👋");
          readline.close();
          break;
        default:
          console.log("❌ Invalid choice! Please try again.");
          this.mainMenu();
          break;
      }
    });
  }
}
