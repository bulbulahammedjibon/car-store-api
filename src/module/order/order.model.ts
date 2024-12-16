import { model, Schema } from "mongoose";
import { iOrder } from "./order.interface";
//create orderSchema
const orderSchema = new Schema<iOrder>(
  {
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
  },
  { timestamps: true }
);

const Order = model<iOrder>("Order", orderSchema);
export default Order;
