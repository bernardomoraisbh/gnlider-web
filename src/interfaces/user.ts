import { Address } from "./address";
import { Country } from "./country";
import { Profession } from "./profession";
import { Sex } from "./sex";
import { Uf } from "./uf";

export interface User {
  id: number;
  name: string;
  surName: string;
  birthday: Date;
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
