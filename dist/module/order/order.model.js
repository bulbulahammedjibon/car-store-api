"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//create orderSchema
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "email must be give email format",
        },
        required: [true, "email is required"],
    },
    car: {
        type: String,
        required: [true, "car is required"],
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required"],
    },
    totalPrice: {
        type: Number,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: "Price must be a positive number",
        },
        required: [true, "totalPrice is required"],
    },
}, { timestamps: true });
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
