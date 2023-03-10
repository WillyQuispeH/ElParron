import * as UserModel from "../models/User";
import * as PersonModel from "../models/Person";

const getByRut = async (req: any, res: any) => {
  const { rut } = req.params;
  const resultPerson = await PersonModel.getByRut(rut);
  res.status(200).json({data:resultPerson});
};


const getByEmail = async (req: any, res: any) => {
  const { email } = req.params;
  const result = await UserModel.getByEmail(email);
  res.status(200).json({ data: result });
};

export { getByRut, getByEmail };
