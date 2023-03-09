import pool from "../util/database";

const getByRut: any = async (rut: string) => {
  return "Este es el Rut Que consultaste: " + rut;
};

const getByName: any = async (name: string) => {
  return "Este es el Nombre Que consultaste: " + name;
};

const getByEmail: any = async (email: string) => {
  try {
    const result = await pool.query(
      "SELECT id, email, password FROM app.user WHERE email = $1",
      [email]
    );
    return result.rows[0];
  } catch (e) {
    return {};
  }
};

export { getByRut, getByName, getByEmail };
