"use strict";
// step by step TODO
/**
 * 1 .mongoose schema
 * 2. mongoose model
 * 3.  mongoose connect
 * 4. mongoose validate on client data
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carExportElement = void 0;
const mongoose_1 = require("mongoose");
const express_1 = require("express");
const carInsertSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
//model
const CarModel = (0, mongoose_1.model)("CarModel", carInsertSchema);
//data from client
const createCarInsertData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientData = yield req.body;
        yield CarModel.create(clientData);
        res.json({
            message: "Successfully Create data",
            status: true,
            data: clientData,
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
// app.post("/insert", createCarInsertData);
const router = (0, express_1.Router)();
router.post("/insert", createCarInsertData);
exports.carExportElement = { createCarInsertData, router };
