import { Router } from "express";

import { orderController } from "./order.controller";

const orderRouter = Router();
// order Router
orderRouter.get("/orders/revenue", orderController.calculateRevenues);

orderRouter.post("/orders", orderController.createOrder);

export default orderRouter;
