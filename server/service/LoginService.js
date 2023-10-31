import * as userRepository from "../repository/LoginRepository.js";

export const getUserLogin = (req, res) => {
  const { user_id, user_pw } = req.query;
  try {
    userRepository.findByUserLogin(user_id, user_pw).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};
