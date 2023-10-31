import db from "../config/db.js";

// 프로젝트 내용
export const insertByProjectMake = async (
  prod_title,
  prod_regdate,
  prod_opendate,
  prod_enddate,
  prod_goal,
  prod_genre,
  prod_mainimg,
  prod_content,
  prod_time,
  prod_intro,
  prod_class,
  user_no,
  img_no
) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "INSERT INTO project (prod_title, prod_regdate,prod_opendate,prod_enddate, prod_current,prod_goal,prod_genre,prod_mainimg, prod_content, prod_stat,prod_time,prod_intro, prod_class, user_no, img_no) values (?, ?, ?, ?, 0, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?)",
    [
      prod_title,
      prod_regdate,
      prod_opendate,
      prod_enddate,
      prod_goal,
      prod_genre,
      prod_mainimg,
      prod_content,
      prod_time,
      prod_intro,
      prod_class,
      user_no,
      img_no,
    ]
  );
  return data[0];
};

// 태그 데이터 connect에 저장
export const insertByProjectTag = async (tagarray) => {
  const conn = await db;

  const [data, fields] = await conn.query(
    "INSERT INTO tagdconnect (prod_no, tdata_no) values ?",
    [tagarray]
  );
  return data[0];
};

// 프로젝트 내용 업데이트
export const updateByProjectContent = async (prod_content, prod_no) => {
  const conn = await db;

  const [data, fields] = await conn.query(
    "update project set prod_content = ? where prod_no = ?",
    [prod_content, prod_no]
  );
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
  const conn = await db;
  const [data, fields] = await conn.query(
    "INSERT INTO reward (reward_name, reward_price, reward_categori, reward_info, prod_no) values (?, ?, ?, ?, ?)",
    [reward_name, reward_price, reward_categori, reward_info, prod_no]
  );
  return data[0];
};

export const findByProjectNo = async (user_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "SELECT prod_no FROM project WHERE user_no ORDER BY prod_regdate DESC LIMIT 1;",
    [user_no]
  );
  return data[0];
};
