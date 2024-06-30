export interface Profession {
  id: number;
  name: string;
  description: string;
}

export const defaultProfession: Profession = {
  id: 0,
  name: "Médico",
  description: "Médico",
};
