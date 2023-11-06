import * as signupRepository from "../repository/SignupRepository.js";


export const postUserSignup = (req, res) => {
    const {user_id, user_pw, user_name, user_phone, user_address, user_regdate, user_sns, img_no} = req.body;
    try {
      signupRepository.insertByUserSignup(user_id, user_pw, user_name, user_phone, user_address, user_regdate, user_sns, img_no).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };