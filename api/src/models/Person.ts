import pool from "../util/database";

const getByRut: any = async (rut: string) => {
  try {
    const result = await pool.query(
      `SELECT id, rut, name, paternallastname, maternallastname, email, phone, address, district
        FROM app.person
         WHERE rut = $1`,
      [rut]
    );
    return { sucess: true, data: result.rows[0], error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

const getByEmail: any = async (email: string) => {
  try {
    const result = await pool.query(
      `SELECT id, rut, name, paternallastname, maternallastname, email, phone, address, district 
        FROM app.person
          WHERE email = $1`,
      [email]
    );
    return { sucess: true, data:result.rows[0], error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

const getById: any = async (id: string) => {
  try {
    const result = await pool.query(
      `SELECT id, rut, name, paternallastname, maternallastname, email, phone, address, district
        FROM app.person
          WHERE id = $1`,
      [id]
    );
    return { sucess: true, data: result.rows[0], error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

const getAll: any = async () => {
  try {
    const result = await pool.query(
      `SELECT id, rut, name, paternallastname, maternallastname, email, phone, address, district
        FROM app.person`
    );
    return { sucess: true, data: result.rows, error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
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
      `INSERT INTO app.person
        (rut, name, paternallastname, maternallastname, email, phone, address, district)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            ON CONFLICT  (rut)
              DO UPDATE SET 
                name=EXCLUDED.name,
                paternallastname=EXCLUDED.paternallastname,
                maternallastname=EXCLUDED.maternallastname,
                email=EXCLUDED.email,
                phone=EXCLUDED.phone,
                address=EXCLUDED.address,
                district=EXCLUDED.district
                  RETURNING *;`,
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

    return { sucess: true, data: result.rows[0], error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
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
      `UPDATE app.person
        SET rut=$2, name=$3, paternallastname=$4, maternallastname=$5, email=$6, phone=$7, address=$8, district=$9
          WHERE id = $1
            RETURNING *;`,
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

    return { sucess: true, data: result.rows[0], error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

const deleteById: any = async (id: string) => {
  try {
    const result = await pool.query("DELETE FROM app.person WHERE id = $1;", [
      id,
    ]);
    return { sucess: true, data: result.rowCount, error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

export { getByRut, getByEmail, getById, getAll, create, update, deleteById };
