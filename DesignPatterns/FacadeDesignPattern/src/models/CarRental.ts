// models/CarRental.ts
export class CarRental {
    rentCar(destination: string, duration: number) {
        console.log(`🚗 Car rented in ${destination} for ${duration} day(s).`);
    }
}