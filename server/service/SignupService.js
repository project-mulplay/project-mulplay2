import * as signupRepository from "../repository/SignupRepository.js";

/**
 * 서비스는 비즈니스 로직을 담당한다.
 * 여기서 비즈니스 로직이란, 데이터를 가공하는 등의 역할을 한다.
 */

export const postUserSignup = (req, res) => {
    const {user_id, user_pw, user_name, user_phone, user_address, user_regdate} = req.body;
    try {
      signupRepository.insertByUserSignup(user_id, user_pw, user_name, user_phone, user_address, user_regdate).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };