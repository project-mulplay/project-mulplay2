import * as fundRepository from "../repository/FundRepository.js";



export const getProjectFunding = (req, res) => {
  const prod_no = req.query.prod_no;
  try {
    fundRepository.findByProjectFunding(prod_no).then((result) => {
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