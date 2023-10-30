import db from "../config/db.js";

/**
 * repository는 데이터베이스와 직접적으로 연동하는 역할을 한다.
 */

// 비동기로 조회하는 함수
// 프로젝트 내용
export const insertByUserSignup = async (user_id, user_pw, user_name, user_phone, user_address, user_regdate, user_sns, user_role, user_stat, img_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "INSERT INTO user (user_id, user_pw, user_name, user_phone, user_address, user_regdate, user_sns, user_role, user_stat, img_no) values (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)",
    [user_id, user_pw, user_name, user_phone, user_address, user_regdate, user_sns, user_role, img_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};