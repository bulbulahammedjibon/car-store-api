import { model, Schema } from "mongoose";
import { iCar } from "./car.interface";
 //crate carSchema
const carSchema = new Schema<iCar>(
  {
    brand: {
      type: String,
      
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);


export const Car = model<iCar>("Car", carSchema);
