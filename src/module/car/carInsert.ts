// step by step TODO
/**
 * 1 .mongoose schema
 * 2. mongoose model
 * 3.  mongoose connect
 * 4. mongoose validate on client data
 */

import { model, Schema } from "mongoose";
import { Request, Response, Router } from "express";
import app from "../../app";

const carInsertSchema = new Schema({
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
});
//model
const CarModel = model("CarModel", carInsertSchema);

//data from client
const createCarInsertData = async (req: Request, res: Response) => {
  try {
    const clientData = await req.body;

    await CarModel.create(clientData);
    res.json({
      message: "Successfully Create data",
      status: true,
    
      data:clientData,
    });
  } catch (error) {
    res.json({
      message: "Validation failed",
      status: false,
       error,
    });
  }
};

// app.post("/insert", createCarInsertData);

const router = Router();

router.post("/insert", createCarInsertData);

export const carExportElement = { createCarInsertData, router };
