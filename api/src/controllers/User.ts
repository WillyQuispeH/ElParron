import createLogger from "../util/logger";

import * as UserModel from "../models/User";
import * as PersonModel from "../models/Person";

import { generatePassword } from "../util/password";
import { emailSender } from "../util/email";

const getAll = async (req: any, res: any) => {
  const result = await UserModel.getAll();
console.log(result.sucess)
  if (!result.sucess) {
    createLogger.error({
      model: "user/getAll",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
};

const getById = async (req: any, res: any) => {
  const { id } = req.params;
  const result = await UserModel.getById(id);

  if (!result.sucess) {
    createLogger.error({
      model: "user/getById",
      error: result.error,
    });
  }
  res.status(200).json({ sucess: true, data: result.data, error: false });
};

const create = async (req: any, res: any) => {
  const {
    rut,
    name,
    paternalLastName,
    maternalLastName,
    email,
    phone,
    address,
    district,
    password,
  } = req.body;

  const resultPerson = await PersonModel.create(
    rut,
    name,
    paternalLastName,
    maternalLastName,
    email,
    phone,
    address,
    district
  );

  if (!resultPerson.sucess) {
    createLogger.error({
      model: "user/createPerson",
      error: resultPerson.error,
    });

    res.status(500).json(resultPerson.error);
    return;
  }

  const resultUser = await UserModel.create(resultPerson.data.id, password);
  if (!resultUser.sucess) {
    createLogger.error({
      model: "user/createUser",
      error: resultUser.error,
    });

    res.status(500).json(resultUser.error);
    return;
  }

  const data = {
    id: resultUser.data.id,
    person_id: resultPerson.data.id,
    rut: resultPerson.data.rut,
    name: resultPerson.data.name,
    paternalLastName: resultPerson.data.paternallastname,
    maternalLastName: resultPerson.data.maternallastname,
    email: resultPerson.data.email,
    phone: resultPerson.data.phone,
    address: resultPerson.data.address,
    district: resultPerson.data.district,
  };

  res.status(200).json({ sucess: true, data: data, error: false });
};

const assignPassword = async (req: any, res: any) => {
  const { id } = req.params;
  const { password } = req.body;

  const resultPerson = await PersonModel.getById(id);
  if (!resultPerson.data) {
    res.status(200).json({ sucess: false, data: null, error: false });
    return;
  };

  const resultUser = await UserModel.getById(id);

  const result = await UserModel.assignPassword(id, password);
  if (!result.sucess) {
    createLogger.error({
      model: "user/assignPassword",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }

  const data = {
    id: resultUser.data.id,
    person_id: resultPerson.data.id,
    rut: resultPerson.data.rut,
    name: resultPerson.data.name,
    paternalLastName: resultPerson.data.paternallastname,
    maternalLastName: resultPerson.data.maternallastname,
    email: resultPerson.data.email,
    phone: resultPerson.data.phone,
    address: resultPerson.data.address,
    district: resultPerson.data.district,
  };

  res.status(200).json({ sucess: true, data: data, error: false });
};

const validate = async (req: any, res: any) => {
  const { email, password } = req.body;

  const resultPerson = await PersonModel.getByEmail(email);

  if (!resultPerson.sucess) {
    createLogger.error({
      model: "user/getByEmail",
      error: resultPerson.error,
    });

    res.status(500).json(resultPerson.error);
    return;
  }

  if (!resultPerson.data) {
    res.status(200).json({ sucess: false, data: null, error: false });
    return;
  }

  const isValid = await UserModel.validate(resultPerson.data.id, password);
  const resultUser = await UserModel.getById(resultPerson.data.id);

  if (!isValid.sucess) {
    createLogger.error({
      model: "user/validate",
      error: resultPerson.error,
    });

    res.status(500).json(isValid.error);
    return;
  }

  if (!isValid.data) {
    res.status(200).json({ sucess: false, data: null, error: false });
    return;
  }

  const data = {
    id: resultUser.data.id,
    person_id: resultPerson.data.id,
    rut: resultPerson.data.rut,
    name: resultPerson.data.name,
    paternalLastName: resultPerson.data.paternallastname,
    maternalLastName: resultPerson.data.maternallastname,
    email: resultPerson.data.email,
    phone: resultPerson.data.phone,
    address: resultPerson.data.address,
    district: resultPerson.data.district,
  };

  res.status(200).json({ sucess: true, data: data, error: false });
};

const recoveryPassword = async (req: any, res: any) => {
  const { email } = req.body;

  const resultPerson = await PersonModel.getByEmail(email);
  if (!resultPerson.sucess) {
    createLogger.error({
      model: "user/getByEmail",
      error: resultPerson.error,
    });

    res.status(500).json(resultPerson.error);
    return;
  }

  if (!resultPerson.data) {
    res.status(200).json({ sucess: true, data: false, error: false });
    return;
  }

  const newPassword = generatePassword();

  const resulAssingPassword = await UserModel.assignPassword(
    resultPerson.data.id,
    newPassword
  );

  if (!resulAssingPassword.sucess) {
    createLogger.error({
      model: "user/assignPassword",
      error: resulAssingPassword.error,
    });

    res.status(500).json(resulAssingPassword.error);
    return;
  }

  const emailSent = emailSender(resultPerson.data, newPassword);

  res.status(200).json({ sucess: true, data: emailSent, error: false });
};

export { getAll, getById, create, assignPassword, validate, recoveryPassword };
