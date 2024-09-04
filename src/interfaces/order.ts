import { OrderProduct, defaultOrderProduct } from "./orderProduct";
import { User, defaultUser } from "./user";

export interface Order {
  id: number;
  user: User;
  status: string;
  amount: number;
  orderProducts: OrderProduct[]
}

export const defaultOrder: Order = {
  id: 0,
  user: defaultUser,
  status: "pending",
  amount: 1,
  orderProducts: [defaultOrderProduct],
};
