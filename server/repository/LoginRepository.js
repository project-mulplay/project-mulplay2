import db from "../config/db.js";

export const findByUserLogin = async (user_id, user_pw) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "SELECT user_no, user_id, user_pw, user_stat FROM user WHERE user_id = ? AND user_pw = ? AND user_stat = 1",
    [user_id, user_pw]
  );
  return data[0];
};
