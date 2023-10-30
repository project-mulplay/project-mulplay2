import * as cartRepository from "../repository/CartRepository.js";


export const getCartPayment = (req, res) => {
  const reward_no = req.query.reward_no;
  const user_no = req.query.user_no;
  try {
    cartRepository.findByCartPayment(reward_no, user_no).then((result) => {
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