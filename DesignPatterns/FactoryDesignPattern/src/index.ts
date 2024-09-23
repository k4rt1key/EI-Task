import * as readline from 'readline';
import { VendingMachine } from './VendingMachine';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const machine = new VendingMachine();

function displayMenu() {
  console.log("\n┌─────────────────────────────────┐");
  console.log("│        VENDING MACHINE MENU      │");
  console.log("├─────────────────────────────────┤");
  console.log("│ 1️⃣  Insert Coins                 │");
  console.log("│ 2️⃣  Select Product               │");
  console.log("│ 3️⃣  View Products                │");
  console.log("│ 4️⃣  Exit                         │");
  console.log("└─────────────────────────────────┘");
}

function promptUser() {
  console.log(`\n💰 Current Balance: ₹${machine.getBalance()}`);
  displayMenu();

  rl.question("Enter your choice (1-4): ", (choice) => {
    switch (choice) {
      case '1':
        rl.question("\n💲 Insert Coin Amount (₹): ", (amount) => {
          machine.insertCoin(parseInt(amount));
          promptUser();
        });
        break;
      case '2':
        machine.displayProducts();
        rl.question("\n🔢 Enter Product Code: ", (code) => {
          machine.selectProduct(code);
          promptUser();
        });
        break;
      case '3':
        machine.displayProducts();
        promptUser();
        break;
      case '4':
        if (machine.getBalance() > 0) {
          console.log(`\n🪙 Returning change: ₹${machine.getBalance()}`);
        }
        console.log("\n👋 Thank you for using our vending machine. Have a great day!");
        rl.close();
        break;
      default:
        console.log("\n❌ Invalid choice. Please try again.");
        promptUser();
    }
  });
}

console.log("\n🎉 Welcome to the Vending Machine! 🎉");
promptUser();
