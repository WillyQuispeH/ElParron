import { Router } from "express";

import * as PriceController from "../controllers/Price"

const PriceRouter = Router();

PriceRouter.get("/getCostPrices", PriceController.getCostPrices);
PriceRouter.get("/getPublicPrices", PriceController.getPublicPrices);

export default PriceRouter;
