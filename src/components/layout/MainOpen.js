import React from "react";
// import React, { useState } from "react";
import "../../pages/main/Main.css";

function Open({ project }) {
  return (
    <div className="main_openCard" key={project.prod_no}>
      <div className="main_openImg">
        <img src={project.prod_mainimg} alt="card2" />
      </div>
      <div className="main_openInfo">
        <div className="main_tag">{project.prod_hashtag}</div>
        <div className="main_openTitle">{project.prod_title}</div>
        <div className="main_openSubtitle">{project.prod_intro}</div>
        <button className="main_openButton">
          {/* <img className="bell" src="./assets/bell.png" /> */}
          10월 11일 오픈 예정
        </button>
      </div>
    </div>
  );
}

export default Open;
