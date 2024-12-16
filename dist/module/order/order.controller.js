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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_model_1 = __importDefault(require("./order.model"));
const order_zod_validation_1 = __importDefault(require("./order.zod.validation"));
//insert data function
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const { car } = payload;
        const orderZodSchema = order_zod_validation_1.default.parse(payload);
        const result = yield order_service_1.OrderService.createOder(orderZodSchema);
        res.json({
            message: "Order created successfully",
            status: true,
            data: {
                message: "Order created successfully",
                status: true,
                data: {
                    _id: result._id,
                    email: result.email,
                    car: result.car,
                    quantity: result.quantity,
                    totalPrice: result.totalPrice,
                    createdAt: result.createdAt,
                    updatedAt: result.updatedAt,
                },
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
// calculate all revenue 
const calculateRevenues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_model_1.default.aggregate([
            {
                $group: {
                    _id: null,
                    totalValue: { $sum: { $multiply: ["$quantity", "$totalPrice"] } },
                },
            },
        ]);
        // const result = await OrderService.revenue();
        // console.log(result);
        res.json({
            message: "Revenue calculated successfully",
            status: true,
            data: {
                totalValue: result[0].totalValue,
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
exports.orderController = {
    createOrder,
    calculateRevenues,
};
