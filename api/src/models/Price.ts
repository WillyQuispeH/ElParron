import pool from "../util/database";

import { _getCostPrices, _getPublicPrices } from "../queries/price";

const getCostPrices = async () => {
  try {
    const result = await pool.query(_getCostPrices);
    return { sucess: true, data: result.rows, error: null };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

const getPublicPrices = async () =>{
  try {
    const result = await pool.query(_getPublicPrices);
    return { sucess: true, data: result.rows, error: null };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  } 
};

export {getCostPrices, getPublicPrices}