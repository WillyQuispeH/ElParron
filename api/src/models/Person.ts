import pool from "../util/database";

const getByRut: any = async (rut: string) => {
  try {
    const result = await pool.query(
      "SELECT id, rut, name, paternallastname, maternallastname, address, district, email FROM app.person WHERE rut = $1",
      [rut]
    );
    return result.rows[0];
  } catch (e) {
    return {};
  }
};

export { getByRut };
