import db from "../config/db.js";


// 프로젝트 내용
export const findByProjectFunding = async (prod_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "SELECT prod_title, prod_opendate, prod_enddate,prod_current, prod_goal, prod_mainimg, prod_intro, prod_time, user_no FROM project WHERE prod_no = ?",
    [prod_no]
  );
  return data[0];
};

// 찜하기
export const findByProjectFundlike = async (like_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "select prod_no, user_no from likeproject where prod_no = ? and user_no = ?",
    [like_no]
  );
  return data[0];
};

// 삭제
export const deleteByProjectFundlike = async (like_no) => {
  const conn = await db;

  const [data, fields] = await conn.query(
    "delete from likeproject where prod_no = ? and user_no = ?",
    [like_no]
  );
  return "success";
};

// 생성
export const insertByProjectFundlike = async (projectLikeData) => {
  const conn = await db;

  const [data, fields] = await conn.query(
    "insert into likeproject (prod_no, user_no) Value (?, ?)",
    [projectLikeData.prod_no, projectLikeData.user_no]
  );
  return data[0];
};

// 리워드
export const findByProjectFundReward = async (reward_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "select reward_name, reward_price, reward_categori, reward_info, prod_no from reward where prod_no = ?",
    [reward_no]
  );
  return data;
};

// 태그 데이터
export const findByProjectFundTagData = async (tdconnect_no, tdata_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "select tdata_type, tdata_name from tagdata where prod_no = ? and tdconnect_no = ?",
    [tdconnect_no, tdata_no]
  );
  return data;
};
