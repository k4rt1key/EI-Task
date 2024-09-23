// models/FlightBooking.ts
export class FlightBooking {
    bookFlight(destination: string, date: string) {
        console.log(`✈️  Flight to ${destination} booked for ${date}.`);
    }
}