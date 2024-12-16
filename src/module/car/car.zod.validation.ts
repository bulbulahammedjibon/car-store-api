import { z } from "zod";
//create zod carSchema 
const carSchemaZod = z.object({
  brand: z
    .string()
    .nonempty("Brand is required")
    .regex(/^[a-zA-Z0-9]+$/, "Brand name must only contain letters"),
  model: z.string().nonempty("Model is required"),
  year: z
    .number()
    .nonnegative("Year must be a positive number")
    .int("Year must be an integer"),
  price: z.number().positive("Price must be  positive number"),
  category: z.string().nonempty("Category is required"),
  description: z.string().nonempty("Description is required"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .nonnegative("Quantity cannot be negative"),
  inStock: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});



export default carSchemaZod;