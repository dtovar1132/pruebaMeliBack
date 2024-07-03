import express, { Request, Response } from "express";
import { productController } from "../controllers/ProductController";

const router = express.Router();

router.get("/items", productController.searchProduct)
router.get("/items/:id", productController.getProduct)

export {router as productRouter}