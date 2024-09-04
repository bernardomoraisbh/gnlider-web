import { User } from "../user";
import { UserCartItem } from "./userCartItem";

export interface UserCart {
  user: User;
  cartProducts: UserCartItem[]
}
