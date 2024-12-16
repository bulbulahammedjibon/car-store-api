"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_controller_1 = require("./car.controller");
const router = (0, express_1.Router)();
//router section
router.post("/cars", car_controller_1.carController.createCar);
router.get("/cars/:carId", car_controller_1.carController.getSingleCar);
router.get("/cars", car_controller_1.carController.getAllCar);
router.put("/cars/:carId", car_controller_1.carController.updateById);
router.delete("/cars/:carId", car_controller_1.carController.deleteSingleCar);
exports.default = router;
