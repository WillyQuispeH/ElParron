import createLogger from "../util/logger";

import * as PersonModel from "../models/Person";

const getByEmail = async (req: any, res: any) => {
  const { email } = req.params;

  const result = await PersonModel.getByEmail(email);
  if (!result.sucess) {
    createLogger.error({
      model: "person/getByEmail",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }
  if (!result.data) {
    res.status(200).json({ sucess: true, data: null, error: false });
    return;
  }
  res.status(200).json({ sucess: true, data: result.data, error: false });
};

const getById = async (req: any, res: any) => {
  const { id } = req.params;

  const result = await PersonModel.getById(id);
  if (!result.sucess || !result.data) {
    createLogger.error({
      model: "person/getById",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
};

const getByRut = async (req: any, res: any) => {
  const { rut } = req.params;

  const result = await PersonModel.getByRut(rut);
  if (!result.sucess || !result.data) {
    createLogger.error({
      model: "person/getByRut",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
};

const getAll = async (req: any, res: any) => {
  const result = await PersonModel.getAll();
  if (!result.sucess) {
    createLogger.error({
      model: "person/getByAll",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
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
  } = req.body;

  const result = await PersonModel.create(
    rut,
    name,
    paternallastname,
    maternallastname,
    email,
    phone,
    address,
    district
  );
  if (!result.sucess) {
    createLogger.error({
      model: "person/create",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
};

const update = async (req: any, res: any) => {
  const { id } = req.params;
  const {
    rut,
    name,
    paternallastname,
    maternallastname,
    email,
    phone,
    address,
    district,
  } = req.body;

  const result = await PersonModel.update(
    id,
    rut,
    name,
    paternallastname,
    maternallastname,
    email,
    phone,
    address,
    district
  );
  if (!result.sucess) {
    createLogger.error({
      model: "person/update",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
};

const deleteById = async (req: any, res: any) => {
  const { id } = req.params;

  const result = await PersonModel.deleteById(id);
  if (!result.sucess) {
    createLogger.error({
      model: "person/deleteById",
      error: result.error,
    });

    res.status(500).json(result.error);
    return;
  }

  res.status(200).json({ sucess: true, data: result.data, error: false });
};

export { getByEmail, getById, getByRut, getAll, create, update, deleteById };
