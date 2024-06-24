import { Uf, defaultUf } from "./uf";

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

export const defaultAddress: Address = {
  id: 0,
  street: "0",
  number: "Not Specified",
  complement: "NONE",
  neighborhood: "",
  city: "",
  state: defaultUf,
  postalCode: "",
  country: "",
};
