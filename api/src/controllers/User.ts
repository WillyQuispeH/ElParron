import * as UserModel from "../models/User"

const getByRut = async (req :any, res:any)=>{
     const {rut } = req.params;
     const result = await UserModel.getByRut(rut);
     res.status(200).json({data:result})
}

const getByName = async (req :any, res:any)=>{
    const {name } = req.params;
    const result = await UserModel.getByRut(name);
    res.status(200).json({data:result})
}

export {getByRut , getByName}