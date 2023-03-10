import pool from "../util/database";

const getByRut: any = async (rut: string) => {
  try {
    const result = await pool.query(
      "SELECT id, rut, name, paternallastname, maternallastname,email, phone, address,district FROM app.person WHERE rut = $1",
      [rut]
    );
    return result.rows[0];
  } catch (e) {
    return { e };
  }
};

const getByEmail: any = async (email: string) => {
  try {
    const result = await pool.query(
      "SELECT id, rut, name, paternallastname, maternallastname,email, phone, address,district FROM app.person WHERE email = $1",
      [email]
    );
    return result.rows[0];
  } catch (e) {
    return { e };
  }
};

const getById: any = async (id: string) => {
  try {
    const result = await pool.query(
      "SELECT id, rut, name, paternallastname, maternallastname,email, phone, address,district FROM app.person WHERE id = $1",
      [id]
    );
    return result.rows[0];
  } catch (e) {
    return { e };
  }
};

const getByAll: any = async () => {
  try {
    const result = await pool.query(
      "SELECT id, rut, name, paternallastname, maternallastname,email, phone, address,district FROM app.person"
    );
    return result.rows;
  } catch (e) {
    return { e };
  }
};

const create: any = async (
  rut: string,
  name: string,
  paternallastname: string,
  maternallastname: string,
  email: string,
  phone: string,
  address: string,
  district: string
) => {
  try {
    const result = await pool.query(
      "INSERT INTO app.person(rut, name, paternallastname, maternallastname, email, phone, address, district)VALUES($1,$2,$3,$4,$5,$6,$7,$8);",
      [
        rut,
        name,
        paternallastname,
        maternallastname,
        email,
        phone,
        address,
        district,
      ]
    );
    return result;
  } catch (e) {
    return { e };
  }
};

const update: any = async (
  id: string,
  rut: string,
  name: string,
  paternallastname: string,
  maternallastname: string,
  email: string,
  phone: string,
  address: string,
  district: string
) => {
  try {
    const result = await pool.query(
      "UPDATE app.person SET rut=$2, name=$3, paternallastname=$4, maternallastname=$5, email=$6, phone=$7, address=$8, district=$9 WHERE id = $1;",
      [
        id,
        rut,
        name,
        paternallastname,
        maternallastname,
        email,
        phone,
        address,
        district,
      ]
    );
    return result;
  } catch (e) {
    return { e };
  }
};

const deleteById: any = async (id: string) => {
  try {
    const result = await pool.query("DELETE FROM app.person WHERE id = $1;", [
      id,
    ]);
  } catch (e) {
    return { e };
  }
};

export { getByRut, getByEmail, getById, getByAll, create, update, deleteById };
