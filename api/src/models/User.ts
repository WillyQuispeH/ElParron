import pool from "../util/database";

const getAll: any = async () => {
  try {
    const result = await pool.query(
      "SELECT id, person_id, password FROM app.user"
    );
    return result.rows;
  } catch (e) {
    return { e };
  }
};

const create: any = async (person_id: string, password: string) => {
  try {
    const result = await pool.query(
      "INSERT INTO app.user (person_id, password) VALUES ($1, $2) RETURNING * ;",
      [person_id, password]
    );
    return result.rows[0];
  } catch (e) {
    return { e };
  }
};

export { getAll, create };
