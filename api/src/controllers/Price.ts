import * as PriceModel from "../models/Price";

import createLogger from "../util/logger";

const getCostPrices = async (req: any, res: any) => {
  const result = await PriceModel.getCostPrices();

  if (!result.sucess) {
    createLogger.error({
      model: "price/getCostPrices",
      error: result.error,
    });
    res.status(500).json({ sucess: false, data: null, error: result.error });
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
};

const getPublicPrices = async (req: any, res: any) => {
  const result = await PriceModel.getPublicPrices();

  if (!result.sucess) {
    createLogger.error({
      model: "price/getPublicPrices",
      error: result.error,
    });
    res.status(500).json({ sucess: false, data: null, error: result.error });
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
};

export { getCostPrices, getPublicPrices };
