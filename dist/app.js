"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carInsert_1 = require("./module/car/carInsert");
const car_routes_1 = __importDefault(require("./module/car/car.routes"));
const order_router_1 = __importDefault(require("./module/order/order.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//app router
app.use("/car-insert", carInsert_1.carExportElement.router);
app.use("/api", car_routes_1.default);
app.use("/api", order_router_1.default);
//default route
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
