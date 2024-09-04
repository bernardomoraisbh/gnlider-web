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

export const Female: Sex = {
  id: 0,
  name: "F",
  description: "Feminino",
};

export const Male: Sex = {
  id: 0,
  name: "M",
  description: "Homem",
};

export const Other: Sex = {
  id: 0,
  name: "O",
  description: "Other",
};
