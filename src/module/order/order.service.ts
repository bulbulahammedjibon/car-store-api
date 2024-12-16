import { iOrder } from "./order.interface";
import Order from "./order.model";

// all logic here
const createOder = async (payload: iOrder) => {
  const result = Order.create(payload);
  return result;
};

const revenue = async () => {
  
   
};

export const OrderService = {
  createOder,
  revenue,
};
