import type { Product } from "../data";

export type UserDetails = {
  name: string;
  phone: string;
  address: string;
  pincode: string;
};

export type Order = {
  product: Product;
  user: UserDetails;
  paymentStatus: "pending";
  orderedAt: string;
};
