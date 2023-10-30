import db from "../config/db.js";

// 결제창 내용
export const findByCartPayment = async (reward_no, user_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "SELECT reward_name, reward_price, reward_category, reward_info, prod_no, user_name, user_phone, user_id, user_address from reward, user where prod_no = ? and user_no = ?",
    [reward_no, user_no]
  );
  return data[0];
};


// 프로젝트 현재 금액 업데이트
export const updateByCartPayment = async (prod_no, prod_current) => {
    const conn = await db;
    const [data, fields] = await conn.query(
        "update project set prod_current = ? where prod_no = ? ",
      [prod_no, prod_current]
    );
    return "success";
  };


   // 생성
   export const insertByCartPayment = async (paymentData) => {
    const conn = await db;
  
    const [data, fields] = await conn.query(
      "insert into payment (pay_price, pay_regdate, user_no, prod_no) Value (?, ?, ?, ?)",
      [paymentData.price, paymentData.regdata, paymentData.user_no, paymentData.prod_no]
    );
    return data[0];
  };