import bcrypt from "bcrypt";

import pool from "../util/database";

const getAll: any = async () => {
  try {
    const result = await pool.query("SELECT id, person_id, hash FROM app.user");
    return result.rows;
  } catch (e) {
    return { e };
  }
};

const create: any = async (person_id: string, password: string) => {
  try {
    const result = await pool.query(
      "INSERT INTO app.user (person_id, hash) VALUES ($1, $2) RETURNING * ;",
      [person_id, password]
    );
    return result.rows[0];
  } catch (e) {
    return { e };
  }
};

const assignPassword: any = async (id: string, password: string) => {
  const salt = 10;
  const hash = await bcrypt.hash(password, salt);

  try {
    const result = await pool.query(
      `UPDATE app.user
        SET hash=$2
          WHERE id = $1
            RETURNING *;`,
      [id, hash]
    );
    return result.rows[0];
  } catch (e) {
    return { e };
  }
};

const validate: any = async (id: string, password: string) => {
  try {
    const result = await pool.query(
      `SELECT hash
        FROM app.user
          WHERE person_id = $1`,
      [id]
    );
    const hash = await bcrypt.compare(password, result.rows[0].hash);
    return hash;
  } catch (e) {
    return { e };
  }
};

export { getAll, create, assignPassword, validate };
