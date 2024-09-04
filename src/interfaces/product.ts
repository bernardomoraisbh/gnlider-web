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

export const defaultProduct: Product = {
  id: 0,
  name: "Soro Fisiológico 0,9%  100 ml - Farmarin",
  resumedDescription: "Soro Fisiológico 100ml Cloreto de Sódio 0,9% - Farmace Soro Fisiológico 250ml Cloreto de Sódio 0,9% - Farmace é utilizada para o restabelecimento de fluido e eletrólitos (sódio e cloreto). A solução também é utilizada como repositora de água e eletrólitos em caso de alcalose metabólica (aumento do pH sanguíneo) de grau moderado, em carência de sódio e como diluente para medicamentos. Embalagem 1 Unidade Fórmula:Cada mL da solução contém:Cloreto de sódio - NaCl: 9 mgÁgua para injeção q.S.P: 100 mLConteúdo eletrolíticoSódio (Na+): 154 mEq/LCloreto (Cl-): 154 mEq/LOSMOLARIDADE: 308 mOsm/LPh: 4,5 - 7,0 Modo de Usar:Infusões intravenosas. Antes de serem administradas, as soluções parenterais devem ser inspecionadas visualmente para se observar a presença de partículas, turvação na solução, fissuras e quaisquer violações na embalagem primária. Não utilizar se detectadas partículas ou algum tipo de precipitado.",
  bigDescription: "Soro Fisiológico 100ml Cloreto de Sódio 0,9% - Farmace Soro Fisiológico 250ml Cloreto de Sódio 0,9% - Farmace é utilizada para o restabelecimento de fluido e eletrólitos (sódio e cloreto). A solução também é utilizada como repositora de água e eletrólitos em caso de alcalose metabólica (aumento do pH sanguíneo) de grau moderado, em carência de sódio e como diluente para medicamentos. Embalagem 1 Unidade Fórmula:Cada mL da solução contém:Cloreto de sódio - NaCl: 9 mgÁgua para injeção q.S.P: 100 mLConteúdo eletrolíticoSódio (Na+): 154 mEq/LCloreto (Cl-): 154 mEq/LOSMOLARIDADE: 308 mOsm/LPh: 4,5 - 7,0 Modo de Usar:Infusões intravenosas. Antes de serem administradas, as soluções parenterais devem ser inspecionadas visualmente para se observar a presença de partículas, turvação na solução, fissuras e quaisquer violações na embalagem primária. Não utilizar se detectadas partículas ou algum tipo de precipitado.",
  application: "",
  aditionalInformation: "",
  restrictSelling: false,
  price: {
    currency: "R$",
    amount: 19.99,
  },
  stock: 1,
  referenceCode: "384994",
  productImage1Url: "/images/SORO 100.jpg",
  productImage2Url: "/images/SORO 100.jpg",
  productImage3Url: "/images/SORO 100.jpg",
  productImage4Url: "/images/SORO 100.jpg",
  productVideoUrl: "",
};
