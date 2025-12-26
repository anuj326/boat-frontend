import type { Product } from "../data";

export type Order = {
  product: Product;
  user: UserDetails;
  paymentStatus: "pending";
  orderedAt: string;
};

export type UserDetails = {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  paymentMethod: "gpay" | "phonepe" | "paytm" | "bharatpay" | "upi";
};

