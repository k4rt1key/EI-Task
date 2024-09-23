import { Product } from '../interfaces/Product';
import { WaterBottle } from '../products/WaterBottle';
import { Chips } from '../products/Chips';
import { SoftDrink } from '../products/SoftDrink';
import { ChocoBar } from '../products/ChocoBar';

export class ProductFactory {
  static createProduct(code: string): Product | null {
    switch (code.toUpperCase()) {
      case 'A1':
        return new WaterBottle();
      case 'B2':
        return new Chips();
      case 'C3':
        return new SoftDrink();
      case 'D4':
        return new ChocoBar();
      default:
        return null;
    }
  }
}