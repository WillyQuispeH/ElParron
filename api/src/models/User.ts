import bcrypt from "bcrypt";

import pool from "../util/database";
import { hashPassword, passwordCompare } from "../util/password";

const getAll: any = async () => {
  try {
    const result = await pool.query("SELECT id, person_id, hash FROM app.user");
    return { sucess: true, data: result.rows, error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

const create: any = async (person_id: string, password: string) => {
  try {
    const hash = await hashPassword(password);
    const result = await pool.query(
      `INSERT INTO app.user (person_id, hash)
        VALUES ($1, $2)
          ON CONFLICT (person_id) 
            DO UPDATE SET hash = EXCLUDED.hash
              RETURNING * ;`,
      [person_id, hash]
    );

    return { sucess: true, data: result.rows[0], error: false };
    
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

const assignPassword: any = async (id: string, password: string) => {
  try {
    const hash = await hashPassword(password);
    const result = await pool.query(
      `UPDATE app.user
        SET hash=$2
          WHERE person_id = $1
            RETURNING *;`,
      [id, hash]
    );
    return { sucess: true, data: result.rows[0], error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

const validate: any = async (id: string, password: string) => {
  try {
    const result = await pool.query(
      `SELECT id, person_id, hash
        FROM app.user
          WHERE person_id = $1`,
      [id]
    );
    const isValid = await passwordCompare(password, result.rows[0].hash);
    
    return { sucess: true, data: isValid, error: false };
  } catch (e) {
    return { sucess: false, data: null, error: (e as Error).message };
  }
};

export { getAll, create, assignPassword, validate };
