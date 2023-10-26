import * as cartRepository from "../repository/CartRepository.js";

/**
 * 서비스는 비즈니스 로직을 담당한다.
 * 여기서 비즈니스 로직이란, 데이터를 가공하는 등의 역할을 한다.
 */

// controller에서 요청을 받고, repository 로 요청을 전달하는 역할을 한다.
export const getCartPayment = (req, res) => {
  // 요청 request 에 있는 쿼리 파라미터(url)를 받는다.
  // 만약 나머지 메소드는 req.body 에서 데이터를 꺼낸다.
  const reward_no = req.query.reward_no;
  const user_no = req.query.user_no;
  try {
    // repository에 요청을 전달한다.
    cartRepository.findByCartPayment(reward_no, user_no).then((result) => {
      // repository에서 반환된 결과를 controller에 반환한다.
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const patchCartPayment = (req, res) => {
  const prod_no = req.body.prod_no;
  const prod_current = req.body.prod_current;
  try {
    cartRepository.updateByCartPayment(prod_no, prod_current).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const postCartPayment = (req, res) => {
  const paymentData = req.body;
  try {
    cartRepository.insertByCartPayment(paymentData).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};