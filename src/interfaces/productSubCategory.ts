import { ProductCategory } from "./productCategory";

export interface ProductSubCategory {
  id: number;
  name: string; // ID of the user who submitted the evaluation
  description: string;
  productCategory: ProductCategory;
}
