import React from "react";
// import React, { useState } from "react";
import "../../pages/main/Main.css";
import card3 from "../../assets/image/card3.png";

function Pick({ project }) {
  return (
    <div className="main_pickCard" key={project.prod_no}>
      <div className="main_pickImg">
        <img src={project.prod_mainimg} alt="card3" />
      </div>
      <div className="main_pickInfo">
        <div className="main_pickTitle">
          {project.prod_title}
          <div className="main_pickSubtitle">{project.prod_intro}</div>
        </div>

        <button className="main_pickButton">바로가기</button>
      </div>
    </div>
  );
}

export default Pick;
