export interface Profession {
  id: number;
  name: string;
  description: string;
}

export const defaultProfession: Profession = {
  id: 0,
  name: "Not Specified",
  description: "Default Description",
};
