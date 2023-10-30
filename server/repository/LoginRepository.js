import db from "../config/db.js";


// 프로젝트 내용
export const findByUserLogin = async (user_id, user_pw) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "SELECT user_id, user_pw FROM user WHERE user_id = ? AND user_pw = ?",
    [user_id, user_pw]
  );
  return data[0];
};