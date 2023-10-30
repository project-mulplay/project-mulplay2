import db from "../config/db.js";

/**
 * repository는 데이터베이스와 직접적으로 연동하는 역할을 한다.
 */

// 비동기로 조회하는 함수
// 결제창 내용
export const findByCartPayment = async (reward_no, user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "SELECT reward_name, reward_price, reward_category, reward_info, prod_no, user_name, user_phone, user_id, user_address from reward, user where prod_no = ? and user_no = ?",
    [reward_no, user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};


// 프로젝트 현재 금액 업데이트
export const updateByCartPayment = async (prod_no, prod_current) => {
    // db.js에서 export default connection;로 export한 connection을 가져온다.
    const conn = await db;
    // 쿼리를 실행한다.
    const [data, fields] = await conn.query(
        "update project set prod_current = ? where prod_no = ? ",
      [prod_no, prod_current]
    );
    // 쿼리 실행 결과를 반환한다.
    return "success";
  };


   // 생성
   export const insertByCartPayment = async (paymentData) => {
    // db.js에서 export default connection;로 export한 connection을 가져온다.
    const conn = await db;
  
    // 쿼리를 실행한다.
    const [data, fields] = await conn.query(
      "insert into payment (pay_price, pay_regdate, user_no, prod_no) Value (?, ?, ?, ?)",
      [paymentData.price, paymentData.regdata, paymentData.user_no, paymentData.prod_no]
    );
    // 쿼리 실행 결과를 반환한다.
    return data[0];
  };