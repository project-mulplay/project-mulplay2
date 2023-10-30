import * as projectRepository from "../repository/ProjectRepository.js";

/**
 * 서비스는 비즈니스 로직을 담당한다.
 * 여기서 비즈니스 로직이란, 데이터를 가공하는 등의 역할을 한다.
 */

export const postProjectMake = (req, res) => {
    const {prod_title,prod_regdate,prod_opendate,prod_enddate,prod_goal,prod_genre,prod_mainimg,prod_content,prod_time,prod_intro,prod_class,user_no,img_no} = req.body;
    try {
      projectRepository.insertByProjectMake(prod_title,prod_regdate,prod_opendate,prod_enddate,prod_goal,prod_genre,prod_mainimg,prod_content,prod_time,prod_intro,prod_class,user_no,img_no).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };

export const postProjectTag = (req, res) => {
    const {prod_no, tdata_no} = req.body;
    console.log("데이터: " ,tdata_no);
    const tagarray = [];
    tdata_no.map(item=>tagarray.push([prod_no, item]))
    console.log(tagarray);
    try {
        projectRepository.insertByProjectTag(tagarray).then((result) => {
        res.status(200).json(result);
    });
    } catch (error) {
        throw error;
    }
};

export const postProjectReward = (req, res) => {
    const {reward_name, reward_price, reward_categori, reward_info, prod_no} = req.body;
    try {
      projectRepository.insertByProjectReward(reward_name, reward_price, reward_categori, reward_info, prod_no).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };

  export const patchProjectContent = (req, res) => {
    const {prod_content, prod_no} = req.body;
    try {
      projectRepository.updateByProjectContent(prod_content, prod_no).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };

  export const getProjectNo = (req, res) => {
    const user_no = req.query.user_no;
    try {
      projectRepository.findByProjectNo(user_no).then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      throw error;
    }
  };