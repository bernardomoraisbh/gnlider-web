export interface Sex {
  id: number;
  name: string;
  description: string;
}

export const defaultSex: Sex = {
  id: 0,
  name: "F",
  description: "Feminino",
};
