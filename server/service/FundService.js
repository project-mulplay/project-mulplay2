import * as fundRepository from "../repository/FundRepository.js";

/**
 * 서비스는 비즈니스 로직을 담당한다.
 * 여기서 비즈니스 로직이란, 데이터를 가공하는 등의 역할을 한다.
 */

// controller에서 요청을 받고, repository 로 요청을 전달하는 역할을 한다.
export const getProjectFunding = (req, res) => {
  // 요청 request 에 있는 쿼리 파라미터(url)를 받는다.
  // 만약 나머지 메소드는 req.body 에서 데이터를 꺼낸다.
  const prod_no = req.query.prod_no;
  try {
    // repository에 요청을 전달한다.
    fundRepository.findByProjectFunding(prod_no).then((result) => {
      // repository에서 반환된 결과를 controller에 반환한다.
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const getProjectFundlike = (req, res) => {
  const like_no = req.query.like_no;
  try {
    fundRepository.findByProjectFundlike(like_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const postProjectFundlike = (req, res) => {
  const like_no = req.body;
  try {
    fundRepository.insertByProjectFundlike(like_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};

export const deleteProjectFundlike = (req, res) => {
    const like_no = req.body.like_no;
    try {
      fundRepository.insertByProjectFundlike(like_no).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };

  export const getProjectFundReward = (req, res) => {
    const reward_no = req.query;
    try {
      fundRepository.findByProjectFundReward(reward_no).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };

  export const getProjectFundTagData = (req, res) => {
    const tdconnect_no = req.query.like_no;
    const tdata_no = req.query;
    try {
      fundRepository.findByProjectFundTagData(tdconnect_no, tdata_no).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };