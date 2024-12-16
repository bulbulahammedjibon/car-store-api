"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
//create zod carSchema 
const carSchemaZod = zod_1.z.object({
    brand: zod_1.z
        .string()
        .nonempty("Brand is required")
        .regex(/^[a-zA-Z0-9]+$/, "Brand name must only contain letters"),
    model: zod_1.z.string().nonempty("Model is required"),
    year: zod_1.z
        .number()
        .nonnegative("Year must be a positive number")
        .int("Year must be an integer"),
    price: zod_1.z.number().positive("Price must be  positive number"),
    category: zod_1.z.string().nonempty("Category is required"),
    description: zod_1.z.string().nonempty("Description is required"),
    quantity: zod_1.z
        .number()
        .int("Quantity must be an integer")
        .nonnegative("Quantity cannot be negative"),
    inStock: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.default = carSchemaZod;
