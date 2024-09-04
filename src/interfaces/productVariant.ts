import { Money } from "./money";
import { Product } from "./product";

export interface ProductVariant {
  id: number;
  name: string;
  description: string;
  stock?: number;
  referenceCode: string;
  price: Money; // Using the Money interface for representing price
  product: Product;
  productImage1Url: string;
  productImage2Url: string;
  productImage3Url: string;
  productImage4Url: string;
  productVideoUrl: string;
}
