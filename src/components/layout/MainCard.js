import React from "react";
import card1 from "../../assets/image/card1.png";
import "../../pages/main/Main.css";

const images = [card1];

const Card = ({ project }) => {
  const currentDate = new Date();

  const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const diffDate = date1.getTime() - date2.getTime();
    const daysDiff = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
    return daysDiff;
  };

  const percent = (goal, current) => {
    return goal > 0 ? Math.floor((current / goal) * 100) : 0;
  };

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="main_mainCard" key={project.prod_no}>
      <div className="main_dday">
        {"D-" + getDateDiff(currentDate, project.prod_enddate)}
      </div>
      <div className="main_cardImg">
        <img src={project.prod_mainimg} alt="card1" />
      </div>
      <div className="main_cardInfo">
        <div className="main_hashtag">
          {project.prod_hashtag.map((hashtag, index) => (
            <div key={index} className="main_tag">
              {hashtag}
            </div>
          ))}
        </div>
        <div className="main_cardTitle">{project.prod_title}</div>
        <div className="main_cardSubtitle">{project.prod_intro}</div>
        <div className="main_cardFooter">
          <div className="main_cardFunding">
            {numberWithCommas(project.prod_current)} 원 펀딩
          </div>
          <div className="main_cardPercent">
            {"달성률 " + percent(project.prod_goal, project.prod_current) + "%"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
