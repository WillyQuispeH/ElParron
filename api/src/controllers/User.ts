import * as UserModel from "../models/User";
import * as PersonModel from "../models/Person";

import { generatePassword } from "../util/password";
import { emailSender } from "../util/email";

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
  const resultCreate = await UserModel.create(resultPerson.id, password);
  res.status(200).json({ sucess: true, data: resultCreate, error: false });
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
  if (!resultPerson) {
    res.status(200).json({ sucess: true, data: false, error: false });
    return;
  }
  const isValid = await UserModel.validate(resultPerson.id, password);
  res.status(200).json({ sucess: true, data: isValid, error: false });
};

const recoveryPassword = async (req: any, res: any) => {
  const { email } = req.body;
  const resultPerson = await PersonModel.getByEmail(email);
  if (!resultPerson) {
    res.status(200).json({ sucess: true, data: false, error: false });
    return;
  }
  const newPassword = generatePassword();
  const resulAssingPassword = await UserModel.assignPassword(resultPerson.id, newPassword);
  const emailSent = emailSender(resultPerson, newPassword);
  res.status(200).json({ sucess: true, data:emailSent, error: false });
};

export { getAll, create, assignPassword, validate, recoveryPassword };
