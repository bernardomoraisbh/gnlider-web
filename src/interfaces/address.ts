import { Uf } from "./uf";

export interface Address {
  id: number;
  street: string; // Street address
  number: string; // House/building number
  complement?: string; // Complement (optional)
  neighborhood: string; // Neighborhood
  city: string; // City
  state: Uf; // State
  postalCode: string; // Postal code (CEP)
  country: string; // Country (assuming Brazil)
}
