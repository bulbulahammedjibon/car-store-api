"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const orderRouter = (0, express_1.Router)();
// order Router
orderRouter.get("/orders/revenue", order_controller_1.orderController.calculateRevenues);
orderRouter.post("/orders", order_controller_1.orderController.createOrder);
exports.default = orderRouter;