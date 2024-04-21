export interface Country {
  id: number;
  code: string; // ISO 3166-1 alpha-2 code
  name: string; // Full name of the country
  flag: string; // URL or path to the flag image
  capital: string; // Capital city
  currency: string; // Currency ISO code (e.g., USD, EUR)
  phonePrefix: string; // International dialing code
  languages: string[]; // Array of official languages
}
