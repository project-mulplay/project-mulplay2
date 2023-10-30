import db from "../config/db.js";

// 프로젝트 내용
export const findByListFunding = async (prod_no, tdconnect_no, tdata_no) => {
  const conn = await db;
  const [data, fields] = await conn.query(
    "SELECT prod_title,prod_regdate,prod_opendate,prod_enddate,prod_current,prod_goal,prod_genre,prod_mainimg,prod_stat,prod_intro,tdata_name FROM project, tagdata WHERE prod_no = ?",
    [prod_no, tdconnect_no, tdata_no]
  );
  return data[0];
};