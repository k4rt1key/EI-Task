# Stock Price Tracker

## Overview

This Stock Price Tracker is a TypeScript-based command-line application that demonstrates the use of the Observer design pattern. It allows users to simulate a stock market environment where investors can subscribe to receive notifications about price changes for a particular stock.

## Project Structure

The project is organized into several TypeScript files:

1. **index.ts**

   - The entry point for the application, initializes the StockPriceTracker.

2. **interfaces/Observer.ts**

   - Defines the `Observer` interface.

3. **models/Investor.ts**

   - Implements the `Investor` class, which represents an investor observing stock prices.

4. **models/Stock.ts**

   - Implements the `Stock` class, which represents a stock and manages its observers.

5. **services/StockPriceTracker.ts**
   - Implements the `StockPriceTracker` class, which provides the interactive interface for the application.

## Features

- Interactive command-line interface for stock price tracking operations.
- Add investors who will be notified of stock price changes.
- Update stock prices and automatically notify subscribed investors.
- Demonstrates the Observer pattern in a practical scenario.
- User-friendly prompts with emojis for better readability.

## How to Run the Project

1. **Prerequisites:**

   - Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd stock-price-tracker
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Program:**

   ```bash
   npx ts-node index.ts
   ```

5. **Follow the Prompts:**
   - The application will guide you through the stock price tracking process.

## Code Structure

### Entry Point (index.ts)

This file initializes the StockPriceTracker and starts the application.

### Observer Interface (interfaces/Observer.ts)

Defines the `Observer` interface with the `update` method.

### Investor Class (models/Investor.ts)

Implements the `Observer` interface:

- `constructor(name: string)`: Creates a new Investor with the given name.
- `update(price: number)`: Called when the stock price changes, logs a notification.

### Stock Class (models/Stock.ts)

Manages the stock and its observers:

- `addObserver(observer: Observer)`: Adds an observer to the stock.
- `removeObserver(observer: Observer)`: Removes an observer from the stock.
- `notifyObservers()`: Notifies all observers of a price change.
- `setPrice(newPrice: number)`: Updates the stock price and notifies observers.

### StockPriceTracker Class (services/StockPriceTracker.ts)

Provides the main functionality and user interface:

- `addInvestor(name: string)`: Adds a new investor as an observer.
- `updatePrice(newPrice: number)`: Updates the stock price.
- `start()`: Begins the interactive session.
- `mainMenu()`: Displays the main menu and handles user input.

## Sample Interaction

Here's an example of how a user would interact with the system:

```
📈 Tip: Add an investor first to send notification about stock price updation

Select an action:
1️⃣ Add Investor
2️⃣ Update Stock Price
3️⃣ Exit
Your choice: 1
Enter investor name: John Doe
👤 Investor John Doe subscribed to Reliance Industries.

Select an action:
1️⃣ Add Investor
2️⃣ Update Stock Price
3️⃣ Exit
Your choice: 1
Enter investor name: Jane Smith
👤 Investor Jane Smith subscribed to Reliance Industries.

Select an action:
1️⃣ Add Investor
2️⃣ Update Stock Price
3️⃣ Exit
Your choice: 2
Enter new price for Reliance Industries: ₹2600
💰 New stock price of Reliance Industries: ₹2600
📢 John Doe notified: Stock price is now ₹2600
📢 Jane Smith notified: Stock price is now ₹2600

Select an action:
1️⃣ Add Investor
2️⃣ Update Stock Price
3️⃣ Exit
Your choice: 3
Thank you for using Stock Price Tracker! 👋
```

## Design Pattern: Observer

This project demonstrates the use of the Observer design pattern:

- The `Stock` class acts as the Subject, maintaining a list of observers (investors) and notifying them of price changes.
- The `Investor` class implements the Observer interface, defining how it reacts to updates from the Subject.
- The `StockPriceTracker` class orchestrates the interaction between Stocks and Investors, showcasing how the pattern can be used in a real-world scenario.

This pattern allows for a loosely coupled design where multiple investors can subscribe to and receive updates from a stock without the stock needing to know the specifics of its observers. It provides a scalable way to implement event handling systems, which is particularly useful in financial and real-time data monitoring applications.
