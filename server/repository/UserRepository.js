import db from "../config/db.js";

export const findByUserProfile = async (user_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "SELECT user_name, user_sns, user_profileimg FROM user WHERE user_no = ?",
    [user_no]
  );

  return data[0];
};

export const findByUserInfo = async (user_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "select user_id, user_name, user_phone, user_address, user_profileimg from user where user_no = ? and user_stat = 1",
    [user_no]
  );
  return data[0];
};

export const updateByUserInfo = async (userData) => {
  const conn = await db;

  const [data, fields] = await conn.query(
    "update `user` set user_name = ? , user_phone = ? , user_address = ?, user_profileimg = ? where user_no = ?",
    [
      userData.user_name,
      userData.user_phone,
      userData.user_address,
      userData.user_profileimg,
      userData.user_no,
    ]
  );
  return data[0];
};

export const deleteByUserInfo = async (user_no) => {
  const conn = await db;

  const [data, fields] = await conn.query(
    "update user set user_stat= 0 where user_no = ? ",
    [user_no]
  );
  return "success";
};

export const findByUserPw = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "select user_pw from `user` where user_no = ? ",
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
    [user_pw, user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return "success";
};

export const findByUserMyProd = async (user_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    `SELECT p.prod_no, p.prod_stat, p.prod_title, p.prod_intro, p.prod_regdate, p.prod_opendate, p.prod_enddate, p.img_no, m.pay_price, prod_goal, prod_current
    FROM project p
    INNER JOIN payment m ON p.prod_no = m.prod_no
    WHERE p.user_no = ?`,
    [user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data;
};

export const patchByUserMyProd = async (user_no, prod_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "update project set prod_stat = 6 where user_no = ? and prod_no = ? ",
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
    "select m.pay_no,p.prod_title , (select user_id from user u2 where u2.user_no =m.user_no) user_id ,m.pay_price ,p.prod_stat, m.pay_regdate from user u inner join project p on u.user_no = p.user_no inner join payment m ON p.prod_no = m.prod_no  where u.user_no = ? ",
    [user_no]
  );
  // 나중에 p.prod
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
