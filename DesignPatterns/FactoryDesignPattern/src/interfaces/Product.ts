export interface Product {
    name: string;
    price: number;
    code: string;
    emoji: string;
    dispense(): void;
  }