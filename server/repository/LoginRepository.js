import db from "../config/db.js";

/**
 * repository는 데이터베이스와 직접적으로 연동하는 역할을 한다.
 */

// 비동기로 조회하는 함수
// 프로젝트 내용
export const findByUserLogin = async (user_id, user_pw) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "SELECT user_id, user_pw FROM user WHERE user_id = ? AND user_pw = ?",
    [user_id, user_pw]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};