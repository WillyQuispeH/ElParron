import { Router } from "express";
import * as OrderController from "../controllers/Order";

const OrderRouter = Router();

OrderRouter.get("/getByOrder/:id", OrderController.getByOrder);

export default OrderRouter