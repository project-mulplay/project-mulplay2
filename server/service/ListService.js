import * as listRepository from "../repository/ListRepository.js";


export const getListFunding = (req, res) => {
  const prod_no = req.query.prod_no;
  const tdconnect_no = req.query.tdconnect_no;
  const tdata_no = req.query.tdata_no;
  try {
    listRepository.findByListFunding(prod_no, tdconnect_no, tdata_no).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    throw error;
  }
};
