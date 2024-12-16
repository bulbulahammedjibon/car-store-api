// all logic

import { iCar } from "./car.interface";
import { Car } from "./car.model";

const createCar = async (payload: iCar) => {
  const result = await Car.create(payload);
  return result;
};
//get all  data
const getAllCar = async () => {
  const result = await Car.find();
  return result;
};

//get specific data
const getSingleCar = async (carId: string) => {
  const result = await Car.findById(carId);
  return result;
};

const updateById = async (carId: string, data: iCar) => {
  const result = await Car.findByIdAndUpdate(carId, data, {
    new: true,
  });
  return result;
};
const deleteSingleCar = async (carId:string)=>{
  const result = await Car.findByIdAndDelete(carId);
  return result;
}

export const carService = {
  createCar,
  getAllCar,
  getSingleCar,
  updateById,
  deleteSingleCar
};
