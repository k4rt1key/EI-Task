# Travel Booking System

## Overview

This Travel Booking System is a TypeScript-based command-line application that demonstrates the use of the Facade design pattern. It simplifies the process of booking a complete trip by providing a single interface to book flights, hotels, and car rentals.

## Project Structure

The project is organized into several TypeScript files:

1. **index.ts**

   - The main application file that handles user interaction.

2. **models/FlightBooking.ts**

   - Defines the `FlightBooking` class for booking flights.

3. **models/HotelBooking.ts**

   - Defines the `HotelBooking` class for booking hotels.

4. **models/CarRental.ts**

   - Defines the `CarRental` class for renting cars.

5. **models/TravelBookingFacade.ts**
   - Implements the `TravelBookingFacade` class, which uses the Facade pattern to simplify trip booking.

## Features

- Interactive command-line interface for booking trips.
- Simplified trip booking process using the Facade pattern.
- Supports booking flights, hotels, and car rentals in a single operation.
- User-friendly prompts with emojis for better readability.

## How to Run the Project

1. **Prerequisites:**

   - Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd travel-booking-system
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
   - The application will guide you through the process of booking a trip.

## Code Structure

### Main Application (app.ts)

This file contains the main application logic:

- Sets up the readline interface for user input.
- Implements the main menu and user interaction flow.
- Uses the `TravelBookingFacade` to book trips.

### FlightBooking Class (models/FlightBooking.ts)

Responsible for booking flights:

- `bookFlight(destination: string, date: string)`: Books a flight to the specified destination on the given date.

### HotelBooking Class (models/HotelBooking.ts)

Handles hotel bookings:

- `bookHotel(destination: string, nights: number)`: Books a hotel in the specified destination for the given number of nights.

### CarRental Class (models/CarRental.ts)

Manages car rentals:

- `rentCar(destination: string, duration: number)`: Rents a car in the specified destination for the given number of days.

### TravelBookingFacade Class (models/TravelBookingFacade.ts)

Implements the Facade pattern to simplify the trip booking process:

- `bookTrip(destination: string, flightDate: string, nights: number, carRentalDays: number)`: Books a complete trip including flight, hotel, and car rental.

## Sample Interaction

Here's an example of how a user would interact with the system:

```
🧳 Welcome to the Travel Booking System!
1️⃣ Book a Trip
2️⃣ Exit
Choose an option (1-2): 1
🌍 Enter destination: Paris
✈️ Enter flight date (e.g., 2024-09-30): 2024-06-15
🏨 How many nights will you stay? 5
🚗 How many days will you rent a car? 3

📆 Starting trip booking process...

✈️ Flight to Paris booked for 2024-06-15.
🏨 Hotel booked in Paris for 5 night(s).
🚗 Car rented in Paris for 3 day(s).
✅ Trip booking complete!

🧳 Welcome to the Travel Booking System!
1️⃣ Book a Trip
2️⃣ Exit
Choose an option (1-2): 2
👋 Thank you for using the Travel Booking System! Goodbye.
```

## Design Pattern: Facade

This project demonstrates the use of the Facade design pattern:

- The `TravelBookingFacade` class provides a simplified interface for booking a complete trip.
- It encapsulates the complexity of interacting with separate systems (flight booking, hotel booking, and car rental) behind a single, easy-to-use interface.
- This pattern improves the readability and usability of the code from the client's perspective.
