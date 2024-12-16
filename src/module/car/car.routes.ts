import { Router } from "express";
import { carController } from "./car.controller";

const router = Router();
//router section

router.post("/cars", carController.createCar);
router.get("/cars/:carId", carController.getSingleCar);

router.get("/cars", carController.getAllCar);
router.put("/cars/:carId", carController.updateById);
router.delete("/cars/:carId", carController.deleteSingleCar);
export default router;
