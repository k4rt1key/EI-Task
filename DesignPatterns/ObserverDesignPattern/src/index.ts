// index.ts - Entry point for the application
import { StockPriceTracker } from "./services/StockPriceTracker";

const tracker = new StockPriceTracker("Reliance Industries", 2500);
tracker.start();
