// app.ts
import * as readline from 'readline';
import { TravelBookingFacade } from './models/TravelBookingFacade';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    const travelFacade = new TravelBookingFacade();

    const promptUser = () => {
        console.log("\n🧳 Welcome to the Travel Booking System!");
        console.log("1️⃣ Book a Trip");
        console.log("2️⃣ Exit");

        rl.question("Choose an option (1-2): ", (choice) => {
            switch (choice) {
                case "1":
                    rl.question("🌍 Enter destination: ", (destination) => {
                        rl.question("✈️ Enter flight date (e.g., 2024-09-30): ", (flightDate) => {
                            rl.question("🏨 How many nights will you stay? ", (nights) => {
                                rl.question("🚗 How many days will you rent a car? ", (carDays) => {
                                    // Call the facade to book the trip
                                    travelFacade.bookTrip(destination, flightDate, parseInt(nights), parseInt(carDays));
                                    promptUser();
                                });
                            });
                        });
                    });
                    break;
                case "2":
                    console.log("👋 Thank you for using the Travel Booking System! Goodbye.");
                    rl.close();
                    break;
                default:
                    console.log("❌ Invalid option, please try again.");
                    promptUser();
            }
        });
    };

    promptUser();
}

main();
