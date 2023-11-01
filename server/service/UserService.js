import * as userRepository from "../repository/UserRepository.js";

export const getUserProfile = (req, res) => {
  const user_no = req.headers.authorization;
  try {
    userRepository.findByUserProfile(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = (req, res) => {
  const user_no = req.headers.authorization;
  try {
    userRepository.findByUserInfo(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const patchUserInfo = (req, res) => {
  const user_no = req.headers.authorization;
  const userData = req.body;
  try {
    userRepository.updateByUserInfo(userData, user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const deleteUserInfo = (req, res) => {
  const user_no = req.headers.authorization;
  try {
    userRepository.deleteByUserInfo(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserPw = (req, res) => {
  const user_no = req.headers.authorization;

  try {
    userRepository.findByUserPw(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const patchUserPw = (req, res) => {
  const user_no = req.headers.authorization;
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
  const user_no = req.headers.authorization;
  try {
    userRepository.findByUserMyProd(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const patchUserMyProd = (req, res) => {
  const user_no = req.headers.authorization;
  const prod_no = req.body.prod_no;
  try {
    userRepository.patchByUserMyProd(user_no, prod_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserMyProceed = (req, res) => {
  const user_no = req.headers.authorization;
  try {
    userRepository.findByUserMyProceed(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserMyFundProd = (req, res) => {
  const user_no = req.headers.authorization;

  try {
    userRepository.findByUserMyFundProd(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserMyLikeProd = (req, res) => {
  const user_no = req.headers.authorization;

  try {
    userRepository.findByUserMyLikeProd(user_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};
