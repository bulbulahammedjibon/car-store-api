//req,res handle
import { Request, Response } from "express";

import { carService } from "./car.service";
import { iCar } from "./car.interface";
import carSchemaZod from "./car.zod.validation";
//create car logic   for db
const createCar = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const zodSchema = carSchemaZod.parse(payload);
    const result = await carService.createCar(zodSchema);
    res.json({
    
      message: "User created successfully",
      status: true,
      data: {
        data: {
          _id: result._id,
          brand: result.brand,
          model: result.model,
          year: result.year,
          price: result.price,
          category: result.category,
          description: result.description,
          quantity: result.quantity,
          inStock: result.inStock,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        }
      },
    });
  } catch (error) {
    res.json({
      
      message: "Validation failed",
      status: false,
       error,
    });
  }
};
// get all car  from db
const getAllCar = async (req: Request, res: Response) => {
  try {
    const result = await carService.getAllCar();
    res.json({
      message: "Cars retrieved successfully",
      status: true,

      data: result,
    });
  } catch (error) {
    res.json({
      message: "Validation failed",
      status: false,
       error,
    });
  }
};
//get specifiq data from db 
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
  

    const result = await carService.getSingleCar(carId);
    res.json({
      message: "Car retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Validation failed",
      status: false,
       error,
    });
  }
};
// update single car data 
const updateById = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const data = req.body;
    const result = await carService.updateById(carId, data);
    
    res.json({
      message: "Car updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Validation failed",
      status: false,
       error,
    });
  }
};
//delete single  car data 
const deleteSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await carService.deleteSingleCar(carId);
    res.json({
      message: "Car deleted successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      message: "Validation failed",
      status: false,
       error,
    });
  }
};
//export all req, res logic
export const carController = {
  createCar,
  getAllCar,
  getSingleCar,
  updateById,
  deleteSingleCar
};
