import { Color } from '.';

export type Car = {
  id: number;
  brand: string;
  logo: string;
  model: string;
  picture: string;
  price: number;
  colors: Color[];
};
