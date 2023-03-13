import * as UserModel from "../models/User";
import * as PersonModel from "../models/Person";

const getAll = async (req: any, res: any) => {
  const result = await UserModel.getAll();
  res.status(200).json({ sucess: true, data: result, error: false });
};

const create = async (req: any, res: any) => {
  const {
    rut,
    name,
    paternallastname,
    maternallastname,
    email,
    phone,
    address,
    district,
    password,
  } = req.body;
  const resultPerson = await PersonModel.create(
    rut,
    name,
    paternallastname,
    maternallastname,
    email,
    phone,
    address,
    district
  );
  const result = await UserModel.create(resultPerson.id, password);
  res.status(200).json({ sucess: true, data: result, error: false });
};

const assignPassword = async (req: any, res: any) => {
  const { id } = req.params;
  const { password } = req.body;
  const result = await UserModel.assignPassword(id, password);
  res.status(200).json({ sucess: true, data: result, error: false });
};

const validate = async (req: any, res: any) => {
  const { email, password } = req.body;
  const resultPerson = await PersonModel.getByEmail(email);
  const result = await UserModel.validate(resultPerson.id, password);
  res.status(200).json({ sucess: true, data: result, error: false });
};

export { getAll, create, assignPassword, validate };
