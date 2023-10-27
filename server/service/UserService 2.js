import * as userRepository from "../repository/UserRepository.js";

/**
 * 서비스는 비즈니스 로직을 담당한다.
 * 여기서 비즈니스 로직이란, 데이터를 가공하는 등의 역할을 한다.
 */

// controller에서 요청을 받고, repository 로 요청을 전달하는 역할을 한다.
export const getUserProfile = (req, res) => {
  // 요청 request 에 있는 쿼리 파라미터(url)를 받는다.
  // 만약 나머지 메소드는 req.body 에서 데이터를 꺼낸다.
  const user_no = req.query.user_no;
  try {
    // repository에 요청을 전달한다.
    userRepository.findByUserProfile(user_no).then((result) => {
      // repository에서 반환된 결과를 controller에 반환한다.
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = (req, res) => {
  const user_no = req.query.user_no;
  try {
    userRepository.findByUserInfo(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const patchUserInfo = (req, res) => {
  const userData = req.body;
  try {
    userRepository.updateByUserInfo(userData).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const deleteUserInfo = (req, res) => {
  const user_no = req.body.user_no;
  try {
    userRepository.deleteByUserInfo(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserPw = (req, res) => {
  const user_no = req.query.user_no;
  try {
    userRepository.findByUserPw(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const patchUserPw = (req, res) => {
  const user_no = req.body.user_no;
  const user_pw = req.body.user_pw;
  try {
    userRepository.updateByUserPw(user_no, user_pw).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserMyProd = (req, res) => {
  const user_no = req.query.user_no;
  try {
    userRepository.findByUserMyProd(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const deleteUserMyProd = (req, res) => {
  const user_no = req.body.user_no;
  const prod_no = req.body.prod_no;
  try {
    userRepository.deleteByUserMyProd(user_no, prod_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserMyProceed = (req, res) => {
  const user_no = req.query.user_no;

  try {
    userRepository.findByUserMyProceed(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserMyFundProd = (req, res) => {
  const user_no = req.query.user_no;

  try {
    userRepository.findByUserMyFundProd(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserMyLikeProd = (req, res) => {
  const user_no = req.query.user_no;

  try {
    userRepository.findByUserMyLikeProd(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};
