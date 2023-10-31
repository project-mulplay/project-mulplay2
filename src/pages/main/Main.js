import { Link } from "react-router-dom";
import React, { useState } from "react";
import projectData from "../../data/projectData.json";

import Card from "../../components/layout/MainCard";
import Open from "../../components/layout/MainOpen";
import Pick from "../../components/layout/MainPick";
import Slider from "../../components/layout/Slider";
import "../../pages/main/Main.css";

import banner4 from "../../assets/image/banner4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  const popularProject = projectData.slice(0, 8);
  const newProjects = projectData.slice(8, 16);
  const openProjects = projectData.slice(16, 17);
  const pickProjects = projectData.slice(17, 19);

  return (
    <div className="main_Main">
      <div className="main_slide">
        <Slider type="main" /> {/* <img src={banner1} alt="banner1" /> */}
      </div>

      <div className="main_container">
        <h2 className="main_mainTitle">인기 펀딩</h2>
        <div className="main_AppCard">
          <Link to="/funding">
            {popularProject.map((project) => (
              <Card key={project.prod_no} project={project} />
            ))}
          </Link>
        </div>
        <div className="main_line"></div>
        <h2 className="main_mainTitle">신규 펀딩</h2>
        <div className="main_AppCard">
          <Link to="/funding">
            {newProjects.map((project) => (
              <Card key={project.prod_no} project={project} />
            ))}
          </Link>
        </div>
        <div className="sub_banner">
          <img src={banner4} alt="banner4" />
        </div>
        <h2 className="main_mainTitle">오픈 예정</h2>
        <div className="main_open">
          {openProjects.map((project) => (
            <Open key={project.prod_no} project={project} />
          ))}
        </div>
        {/* <div className="main_line"></div> */}
        <h2 className="main_mainTitle">에디터의 Pick</h2>
        <div className="main_pick">
          {pickProjects.map((project) => (
            <Pick key={project.prod_no} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
