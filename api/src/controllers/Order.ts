import * as OrderModel from "../models/Order";

const getById = async (req :any, res:any)=>{
    const {id } = req.params;
    const result = await OrderModel.getById(id);
    res.status(200).json({data:result})
}
export {getById}