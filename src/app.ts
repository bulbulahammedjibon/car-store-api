import express, { Response, Request } from "express";
import { carExportElement } from "./module/car/carInsert";
import router from "./module/car/car.routes";
import orderRouter from "./module/order/order.router";

const app = express();
app.use(express.json());

//app router
app.use("/car-insert", carExportElement.router);
app.use("/api", router);
app.use("/api", orderRouter);

//default route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
