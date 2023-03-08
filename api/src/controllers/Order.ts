import * as OrderModel from "../models/Order";

const getByOrder = async (req :any, res:any)=>{
    const {id } = req.params;
    const result = await OrderModel.getByOrder(id);
    res.status(200).json({data:result})
}
export {getByOrder}