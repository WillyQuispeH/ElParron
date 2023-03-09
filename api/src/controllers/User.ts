import * as UserModel from "../models/User";
import * as PersonModel from "../models/Person";

const getByRut = async (req: any, res: any) => {
  const { rut } = req.params;
  const resultPerson = await PersonModel.getByRut(rut);
  const resultuser = await UserModel.getByEmail(resultPerson.email);

  const data = {
    person_id: resultPerson.id,
    rut: resultPerson.rut,
    name: resultPerson.name,
    paternalLastName: resultPerson.paternallastname,
    maternalLastName: resultPerson.maternallastname,
    address: resultPerson.address,
    district: resultPerson.district,
    phone: resultPerson.phone,
    id_user: resultuser.id,
    email: resultuser.email,
    password: resultuser.password,
  };

  res.status(200).json({ data });
};

const getByName = async (req: any, res: any) => {
  const { name } = req.params;
  const result = await UserModel.getByName(name);
  res.status(200).json({ data: result });
};

const getByEmail = async (req: any, res: any) => {
  const { email } = req.params;
  const result = await UserModel.getByEmail(email);
  res.status(200).json({ data: result });
};

export { getByRut, getByName, getByEmail };
