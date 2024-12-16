import { z } from 'zod';

const orderSchema = z.object({
  email: z.string()
    .nonempty({ message: "Email is required" })
    .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, { message: "Email must be in  valid format" }),
  car: z.string()
    .nonempty({ message: "Car is required" }),
  quantity: z.number()
    .min(1, { message: "Quantity is required" }),
  totalPrice: z.number()
    .min(0, { message: "Price must be  positive number" }),
  createdAt: z.date(),
  updatedAt: z.date()
});

export default orderSchema;

 