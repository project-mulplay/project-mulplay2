import db from "../config/db.js";

export const findByUserProfile = (user_no) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT user_name, user_sns FROM user WHERE user_no = ?",
      [user_no],
      function (err, rows, fields) {
        if (err) {
          reject(err); // 에러 처리
        } else {
          resolve({ status: "success", fields });
        }
      }
    );
  });
};
