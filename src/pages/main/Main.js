import { Link } from "react-router-dom";
import React, { useState } from "react";
import Card from "../../components/layout/MainCard";
import Open from "../../components/layout/MainOpen";
import Pick from "../../components/layout/MainPick";
import Slider from "../../components/layout/Slider";
import "../../pages/main/Main.css";

import banner4 from "../../assets/image/banner4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  return (
    <div className="main_Main">
      <div className="main_slide">
        <Slider />
        {/* <img src={banner1} alt="banner1" /> */}
      </div>

      <div className="main_container">
        <h2 className="main_mainTitle">인기 펀딩</h2>
        <div className="main_AppCard">
          <Link to="/funding">
            <Card />
          </Link>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="main_line"></div>
        <h2 className="main_mainTitle">신규 펀딩</h2>
        <div className="main_AppCard">
          <Link to="/funding">
            <Card />
          </Link>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="sub_banner">
          <img src={banner4} alt="banner4" />
        </div>
        <h2 className="main_mainTitle">오픈 예정</h2>
        <div className="main_open">
          <Open />
        </div>
        <div className="main_line"></div>
        <h2 className="main_mainTitle">에디터의 Pick</h2>
        <div className="main_pick">
          <Pick />
          <Pick />
        </div>
      </div>
    </div>
  );
}

export default Main;
