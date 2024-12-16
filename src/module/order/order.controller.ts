//res,res handle
import { Request, Response } from "express";
import { OrderService } from "./order.service";
import Order from "./order.model";
import { carService } from "../car/car.service";
import orderSchema from "./order.zod.validation";

//insert data function
const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const { car } = payload;
    

  const orderZodSchema = orderSchema.parse(payload);

    const result = await OrderService.createOder(orderZodSchema);
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
  } catch (error) {
    res.json({
      message: "Validation failed",
      status: false,
      error,
    });
  }
};
// calculate all revenue 
const calculateRevenues = async (req: Request, res: Response) => {
  try {
    const result = await Order.aggregate([
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
  } catch (error) {
    res.json({
      message: "Validation failed",
      status: false,
       error,
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenues,
};
