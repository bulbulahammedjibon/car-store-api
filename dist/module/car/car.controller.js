"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carController = void 0;
const car_service_1 = require("./car.service");
const car_zod_validation_1 = __importDefault(require("./car.zod.validation"));
//create car logic   for db
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const zodSchema = car_zod_validation_1.default.parse(payload);
        const result = yield car_service_1.carService.createCar(zodSchema);
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
    }
    catch (error) {
        res.json({
            message: "Validation failed",
            status: false,
            error,
        });
    }
});
// get all car  from db
const getAllCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.carService.getAllCar();
        res.json({
            message: "Cars retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.json({
            message: "Validation failed",
            status: false,
            error,
        });
    }
});
//get specifiq data from db 
const getSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carService.getSingleCar(carId);
        res.json({
            message: "Car retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.json({
            message: "Validation failed",
            status: false,
            error,
        });
    }
});
// update single car data 
const updateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const data = req.body;
        const result = yield car_service_1.carService.updateById(carId, data);
        res.json({
            message: "Car updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.json({
            message: "Validation failed",
            status: false,
            error,
        });
    }
});
//delete single  car data 
const deleteSingleCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carService.deleteSingleCar(carId);
        res.json({
            message: "Car deleted successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.json({
            message: "Validation failed",
            status: false,
            error,
        });
    }
});
//export all req, res logic
exports.carController = {
    createCar,
    getAllCar,
    getSingleCar,
    updateById,
    deleteSingleCar
};
