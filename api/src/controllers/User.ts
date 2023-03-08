import * as UserModel from "../models/User";
import * as PersonModel from "../models/Person";

const getByRut = async (req: any, res: any) => {
  const { rut } = req.params;
  const result = await UserModel.getByRut(rut);
  res.status(200).json({ data: result });
};

const getByName = async (req: any, res: any) => {
  const { name } = req.params;
  const result = await UserModel.getByName(name);
  res.status(200).json({ data: result });
};

const getByEmail = async (req: any, res: any) => {
  const { email } = req.params;
  const result = await PersonModel.getByEmail(email);
  res.status(200).json({ data: result });
};

export { getByRut, getByName, getByEmail };
