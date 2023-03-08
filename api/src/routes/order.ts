import { Router } from "express";
import * as OrderController from "../controllers/Order";

const OrderRouter = Router();

OrderRouter.get("/getById/:id", OrderController.getById);

export default OrderRouter