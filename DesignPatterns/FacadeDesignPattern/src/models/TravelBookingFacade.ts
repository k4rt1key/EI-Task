// models/TravelBookingFacade.ts
import { FlightBooking } from './FlightBooking';
import { HotelBooking } from './HotelBooking';
import { CarRental } from './CarRental';

export class TravelBookingFacade {
    private flightBooking: FlightBooking;
    private hotelBooking: HotelBooking;
    private carRental: CarRental;

    constructor() {
        this.flightBooking = new FlightBooking();
        this.hotelBooking = new HotelBooking();
        this.carRental = new CarRental();
    }

    // Facade method to book an entire trip
    bookTrip(destination: string, flightDate: string, nights: number, carRentalDays: number) {
        console.log('\n📆 Starting trip booking process...\n');
        this.flightBooking.bookFlight(destination, flightDate);
        this.hotelBooking.bookHotel(destination, nights);
        this.carRental.rentCar(destination, carRentalDays);
        console.log('✅ Trip booking complete!\n');
    }
}
