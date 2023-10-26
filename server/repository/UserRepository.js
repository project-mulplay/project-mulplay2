import db from "../config/db.js";

/**
 * repository는 데이터베이스와 직접적으로 연동하는 역할을 한다.
 */

// 비동기로 조회하는 함수
export const findByUserProfile = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "SELECT user_name, user_sns FROM user WHERE user_no = ?",
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

export const findByUserInfo = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "select user_id, user_name, user_phone, user_address from user where user_no = ?",
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

export const updateByUserInfo = async (userData) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "update user set user_name = ? , user_phone = ? , user_address = ? where user_no = ?",
    [
      userData.user_name,
      userData.user_phone,
      userData.user_address,
      userData.user_no,
    ]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

export const deleteByUserInfo = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "delete from user where user_no = ?",
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return "success";
};

export const findByUserPw = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "select user_pw from user where user_no = ? ",
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

export const updateByUserPw = async (user_no, user_pw) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "update user set user_pw = ? where user_no = ? ",
    [user_no, user_pw]
  );
  // 쿼리 실행 결과를 반환한다.
  return "success";
};

export const findByUserMyProd = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "select prod_no, prod_stat, prod_title, prod_intro, prod_regdate, prod_opendate, prod_enddate, img_no from mulplay.project where user_no = ? ",
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data;
};

export const deleteByUserMyProd = async (user_no, prod_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "delete from project  where user_no = ? and prod_no = ?",
    [user_no, prod_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return "success";
};

export const findByUserMyProceed = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "select p.prod_title , u.user_id ,m.pay_price ,p.prod_stat from user u inner join project p on u.user_no = p.user_no inner join payment m ON p.prod_no = m.prod_no  where u.user_no = ? ",
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data;
};

export const findByUserMyFundProd = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    `select p.prod_stat, p.prod_title, p.prod_intro, p.prod_goal, p.prod_current, p.img_no, m.pay_price
    from user u
    inner join project p on u.user_no = p.user_no
    inner join payment m on p.prod_no = m.prod_no 
    where u.user_no = ? `,
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data;
};

export const findByUserMyLikeProd = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    `select p.prod_stat, p.prod_title, p.prod_intro, p.prod_goal, p.prod_current, p.img_no, m.pay_price
    from user u 
    inner join project p on u.user_no = p.user_no 
    inner join payment m on p.prod_no = m.prod_no 
    inner join likeproject l on l.user_no = u.user_no
    where u.user_no = ?`,
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data;
};