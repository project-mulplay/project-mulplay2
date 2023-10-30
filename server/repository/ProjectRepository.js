import db from "../config/db.js";

/**
 * repository는 데이터베이스와 직접적으로 연동하는 역할을 한다.
 */

// 비동기로 조회하는 함수
// 프로젝트 내용
export const insertByProjectMake = async (
  prod_title,
  prod_regdate,
  prod_opendate,
  prod_enddate,
  prod_current,
  prod_goal,
  prod_genre,
  prod_mainimg,
  prod_content,
  prod_stat,
  prod_time,
  prod_intro,
  prod_class,
  user_no,
  img_no
) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "INSERT INTO project (prod_title, prod_regdate,prod_opendate,prod_enddate, prod_current,prod_goal,prod_genre,prod_mainimg,prod_content, prod_stat,prod_time,prod_intro, prod_class, user_no, img_no) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      prod_title,
      prod_regdate,
      prod_opendate,
      prod_enddate,
      prod_current,
      prod_goal,
      prod_genre,
      prod_mainimg,
      prod_content,
      prod_stat,
      prod_time,
      prod_intro,
      prod_class,
      user_no,
      img_no,
    ]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

// 태그 데이터 connect에 저장
export const insertByProjectTag = async (tagarray) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "INSERT INTO tagdconnect (prod_no, tdata_no) values ?",
    [tagarray]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

// 리워드 내용
export const insertByProjectReward = async (
  reward_name,
  reward_price,
  reward_categori,
  reward_info,
  prod_no
) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "INSERT INTO reward (reward_name, reward_price, reward_categori, reward_info, prod_no) values (?, ?, ?, ?, ?)",
    [reward_name, reward_price, reward_categori, reward_info, prod_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

// 프로젝트 컨텐츠 내용
export const updateByProjectMake = async (prod_content) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "update project set prod_content = ? where prod_no = ?",
    [prod_content]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};
