import pool from "../util/database";

const getByRut: any = async (rut: string) => {
  return "Este es el rut que consultaste: " + rut;
};

const getByEmail: any = async (email: string = "ejemplo@abad.cl") => {
  try {
    const result = await pool.query(
      "SELECT id, rut, name, paternallastname, maternallastname,email. phone, address,district FROM app.person WHERE email = $1",
      [email]
    );
    return result.rows[0];
  } catch (e) {
    return {};
  }
};



export { getByRut, getByEmail };
