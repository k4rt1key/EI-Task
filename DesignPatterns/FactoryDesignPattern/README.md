# Vending Machine Simulator

## Overview

This Vending Machine Simulator is a TypeScript-based command-line application that demonstrates the use of the Factory Method design pattern. It simulates a vending machine where users can insert coins, select products, and receive their chosen items.

## Project Structure

The project is organized into several TypeScript files:

1. **index.ts**

   - The main application file that handles user interaction.

2. **interfaces/Product.ts**

   - Defines the `Product` interface for vending machine products.

3. **products/WaterBottle.ts**

   - Implements the `WaterBottle` class.

4. **products/Chips.ts**

   - Implements the `Chips` class.

5. **products/SoftDrink.ts**

   - Implements the `SoftDrink` class.

6. **products/ChocoBar.ts**

   - Implements the `ChocoBar` class.

7. **factories/ProductFactory.ts**

   - Implements the `ProductFactory` class using the Factory Method pattern.

8. **VendingMachine.ts**
   - Defines the `VendingMachine` class that manages the vending machine operations.

## Features

- Interactive command-line interface for vending machine operations.
- Support for inserting coins, selecting products, and dispensing items.
- Display of available products and current balance.
- Use of emojis for a more engaging user experience.
- Implementation of the Factory Method pattern for product creation.

## How to Run the Project

1. **Prerequisites:**

   - Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd vending-machine-simulator
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Program:**

   ```bash
   npx ts-node app.ts
   ```

5. **Follow the Prompts:**
   - The application will guide you through the vending machine operations.

## Code Structure

### Main Application (app.ts)

This file contains the main application logic:

- Sets up the readline interface for user input.
- Implements the main menu and user interaction flow.
- Uses the `VendingMachine` class to manage operations.

### Product Interface (interfaces/Product.ts)

Defines the structure for all product classes:

- Properties: name, price, code, emoji
- Method: dispense()

### Product Classes (products/\*.ts)

Implement specific product types (WaterBottle, Chips, SoftDrink, ChocoBar):

- Each class implements the `Product` interface.
- Defines specific properties and dispense behavior for each product.

### ProductFactory Class (factories/ProductFactory.ts)

Implements the Factory Method pattern:

- `createProduct(code: string)`: Creates and returns a product based on the given code.

### VendingMachine Class (VendingMachine.ts)

Manages the vending machine operations:

- `insertCoin(amount: number)`: Adds money to the balance.
- `selectProduct(code: string)`: Handles product selection and dispensing.
- `displayProducts()`: Shows available products.
- `getBalance()`: Returns the current balance.

## Sample Interaction

Here's an example of how a user would interact with the system:

```
🎉 Welcome to the Vending Machine! 🎉

💰 Current Balance: ₹0
┌─────────────────────────────────┐
│        VENDING MACHINE MENU      │
├─────────────────────────────────┤
│ 1️⃣  Insert Coins                 │
│ 2️⃣  Select Product               │
│ 3️⃣  View Products                │
│ 4️⃣  Exit                         │
└─────────────────────────────────┘
Enter your choice (1-4): 1

💲 Insert Coin Amount (₹): 50

💰 Inserted ₹50. Total: ₹50

💰 Current Balance: ₹50
...
Enter your choice (1-4): 2

🏪 Available Products:
┌────┬─────────────────┬─────────┐
│Code│ Product         │ Price   │
├────┼─────────────────┼─────────┤
│ A1 │ 💧 Cool Water    │    ₹20 │
│ B2 │ 🥔 Crunchy Chips │    ₹30 │
│ C3 │ 🥤 Fizzy Cola    │    ₹35 │
│ D4 │ 🍫 Choco Delight │    ₹25 │
└────┴─────────────────┴─────────┘

🔢 Enter Product Code: B2

🛒 You selected 🥔 Crunchy Chips. Price: ₹30

🥔 Your Crunchy Chips dropped! Enjoy the crunch. (₹30)

💰 Remaining balance: ₹20
...
Enter your choice (1-4): 4

🪙 Returning change: ₹20

👋 Thank you for using our vending machine. Have a great day!
```

## Design Pattern: Factory Method

This project demonstrates the use of the Factory Method design pattern:

- The `ProductFactory` class encapsulates the logic for creating different types of products.
- It allows for easy addition of new product types without modifying existing code.
- The `VendingMachine` class uses the factory to create products, decoupling the product creation logic from the vending machine operations.

This pattern improves the extensibility and maintainability of the code, making it easier to add new product types in the future.
