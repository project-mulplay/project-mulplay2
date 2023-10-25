import * as userRepository from "../repository/UserRepository.js";

/**
 * 서비스는 비즈니스 로직을 담당한다.
 * 여기서 비즈니스 로직이란, 데이터를 가공하는 등의 역할을 한다.
 */

// controller에서 요청을 받고, repository 로 요청을 전달하는 역할을 한다.
export const getUserProfile =  (req, res) => {
  // 요청 request 에 있는 쿼리 파라미터(url)를 받는다.
  const user_no = req.query.user_no;
  try {
    // repository에 요청을 전달한다.
      userRepository.findByUserProfile(user_no)
        .then((result) => {
      // repository에서 반환된 결과를 controller에 반환한다.
        res.status(200).json(result)
    });
  } catch (error) {
    throw error;
  }
};
