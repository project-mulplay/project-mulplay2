import * as userRepository from "../repository/UserRepository.js";

export const getUserProfile = async (user_no) => {
  try {
    const result = await userRepository.findByUserProfile(user_no);
    // 다른 userRepository 함수들을 사용할 수도 있음
    // const something = await userRepository.function1(param);
    return result;
  } catch (error) {
    throw error;
  }
};
