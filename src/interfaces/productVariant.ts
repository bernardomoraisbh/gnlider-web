import { Product } from "./product";

export interface ProductVariant {
  id: number;
  name: string;
  description: string;
  stock: number;
  referenceCode: string;
  product: Product;
  productImage1Url: string;
  productImage2Url: string;
  productImage3Url: string;
  productImage4Url: string;
  productVideoUrl: string;
}
