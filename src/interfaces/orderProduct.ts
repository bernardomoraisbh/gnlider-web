import { OrderItem, defaultOrderItem } from "./orderItems";

export interface OrderProduct {
  id: number;
  status: string;
  amount: number;
  orderItems: OrderItem[]
}

export const defaultOrderProduct: OrderProduct = {
  id: 0,
  amount: 1,
  status: "pending",
  orderItems: [defaultOrderItem],
};
