"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderSchema = zod_1.z.object({
    email: zod_1.z.string()
        .nonempty({ message: "Email is required" })
        .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, { message: "Email must be in  valid format" }),
    car: zod_1.z.string()
        .nonempty({ message: "Car is required" }),
    quantity: zod_1.z.number()
        .min(1, { message: "Quantity is required" }),
    totalPrice: zod_1.z.number()
        .min(0, { message: "Price must be  positive number" }),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date()
});
exports.default = orderSchema;
