import db from "../config/db.js";

/**
 * repository는 데이터베이스와 직접적으로 연동하는 역할을 한다.
 */

// 비동기로 조회하는 함수
// 프로젝트 내용
export const findByProjectFunding = async (prod_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "SELECT prod_title, prod_opendate, prod_enddate,prod_current, prod_goal, prod_mainimg, prod_intro, prod_time, user_no FROM project WHERE prod_no = ?",
    [prod_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

// 찜하기
export const findByProjectFundlike = async (like_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "select prod_no, user_no from likeproject where prod_no = ? and user_no = ?",
    [like_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

// 삭제
export const deleteByProjectFundlike = async (like_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "delete from likeproject where prod_no = ? and user_no = ?",
    [like_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return "success";
};

// 생성
export const insertByProjectFundlike = async (projectLikeData) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;

  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "insert into likeproject (prod_no, user_no) Value (?, ?)",
    [projectLikeData.prod_no, projectLikeData.user_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data[0];
};

// 리워드
export const findByProjectFundReward = async (reward_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "select reward_name, reward_price, reward_categori, reward_info, prod_no from reward where prod_no = ?",
    [reward_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data;
};

// 태그 데이터
export const findByProjectFundTagData = async (tdconnect_no, tdata_no) => {
  // db.js에서 export default connection;로 export한 connection을 가져온다.
  const conn = await db;
  // 쿼리를 실행한다.
  const [data, fields] = await conn.query(
    "select tdata_type, tdata_name from tagdata where prod_no = ? and tdconnect_no = ?",
    [tdconnect_no, tdata_no]
  );
  // 쿼리 실행 결과를 반환한다.
  return data;
};
