import { Address, defaultAddress } from "./address";
import { Country, defaultCountry } from "./country";
import { Profession, defaultProfession } from "./profession";
import { Sex, defaultSex } from "./sex";
import { Uf, defaultUf } from "./uf";

export interface User {
  id: number;
  name: string;
  surName: string;
  birthday: string;
  sex: Sex;
  profession: Profession;
  email: string;
  country: Country;
  addresses: Address[]; // Array of addresses
  primaryAddressId: number; // Id of the primary address in the addresses array
  cpf: string;
  cnpj: string;
  stateInscriptionCode: string;
  cro: string;
  croState: Uf;
  phone: string;
  isWhatsapp: boolean;
  cellphone: string;
}

export const defaultUser: User = {
  id: 0,
  name: "Test",
  surName: "Tester Test",
  birthday: "",
  sex: defaultSex,
  profession: defaultProfession,
  email: "",
  country: defaultCountry,
  addresses: [defaultAddress], // Array of addresse,
  primaryAddressId: 0, // Id of the primary address in the addresses arra,
  cpf: "",
  cnpj: "",
  stateInscriptionCode: "",
  cro: "",
  croState: defaultUf,
  phone: "",
  isWhatsapp: false,
  cellphone: "",
};
