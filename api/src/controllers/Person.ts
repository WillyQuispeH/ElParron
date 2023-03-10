import * as PersonModel from "../models/Person"

const getByEmail = async (req: any, res: any) => {
    const {email} = req.params;
    const result = await PersonModel.getByEmail(email);
    res.status(200).json({ sucess:true, data: result , error:false });
};

const getById = async (req:any, res:any) =>{
    const{id} = req.params;
    const result = await PersonModel.getById(id);
    res.status(200).json({ sucess:true, data: result , error:false });
};

const getByRut = async (req:any, res:any) =>{
    const{rut} = req.params;
    const result = await PersonModel.getByRut(rut);
    res.status(200).json({ sucess:true, data: result , error:false });
};

const getByAll = async(req:any, res:any) =>{
    const result = await PersonModel.getByAll();
    res.status(200).json({sucess:true, data: result, error:false})
};

const create = async(req:any, res:any) =>{
    const{rut,name, paternallastname, maternallastname, email, phone, address, district} = req.body;
    const result = await PersonModel.create(rut,name, paternallastname, maternallastname, email, phone, address, district);
    res.status(200).json({sucess:true, data: result, error:false})
};

const update = async(req:any, res:any) =>{
    const {id} = req.params;
    const{rut,name, paternallastname, maternallastname, email, phone, address, district} = req.body;
    const result = await PersonModel.update(id, rut,name, paternallastname, maternallastname, email, phone, address, district);
    res.status(200).json({sucess:true, data: result, error:false})
};

const deleteById = async(req:any, res:any) =>{
    const {id} = req.params;
    const result = await PersonModel.deleteById(id);
    res.status(200).json({sucess:true, data: result, error:false})
};

  export {getByEmail, getById, getByRut, getByAll, create, update, deleteById}