// models/HotelBooking.ts
export class HotelBooking {
    bookHotel(destination: string, nights: number) {
        console.log(`🏨 Hotel booked in ${destination} for ${nights} night(s).`);
    }
}