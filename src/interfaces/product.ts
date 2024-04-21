import { Money } from "./money";

export interface Product {
  id: number;
  name: string;
  resumedDescription: string;
  bigDescription: string;
  application: string;
  aditionalInformation: string;
  restrictSelling: boolean;
  price: Money; // Using the Money interface for representing price
  stock: number;
  referenceCode: string;
  productImage1Url: string;
  productImage2Url: string;
  productImage3Url: string;
  productImage4Url: string;
  productVideoUrl: string;
}
