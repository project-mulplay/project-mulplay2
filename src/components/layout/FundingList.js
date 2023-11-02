import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./FundingList.css";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../../assets/image/listpageicon/ListImg";

import projectData from "../../data/projectData.json";
import Card from "../layout/MainCard";

const FundingList = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const selectOptionList = [
    { value: "all", name: "전체", image: image1 },
    { value: "0", name: "웹", image: image2 },
    { value: "1", name: "애플리케이션", image: image3 },
    { value: "2", name: "일반소프트웨어", image: image4 },
    { value: "3", name: "게임", image: image5 },
    { value: "4", name: "커머스쇼핑몰", image: image6 },
    { value: "5", name: "퍼블리싱", image: image7 },
    { value: "6", name: "디자인", image: image8 },
  ];

  const popularProject = projectData
    .filter((project) => {
      return (
        selectedTab === "all" || project.prod_genre === parseInt(selectedTab)
      );
    })
    .slice(0, 12);

  return (
    <div className="fundinglistpage">
      <div className="fundinglist_tab">
        {/* <ul className="fundinglist_tabs"> */}
        {selectOptionList.map((option) => (
          <button
            key={option.value}
            className={selectedTab === option.value ? "active" : ""}
            onClick={() => setSelectedTab(option.value)}
          >
            <div className="Imagetab_img">
              <img src={option.image} alt="" width={50} />
            </div>
            {option.name}
          </button>
        ))}

        {/* </ul> */}
      </div>
      <div className="fundinglist_contents">
        <div className="fundinglist_title">
          <p>전체</p>
          <div className="fundinglist_title_tab">
            <ul>
              <li>추천순</li>
              <li>최신순</li>
              <li>달성률순</li>
              <li>마감임박순</li>
            </ul>
          </div>
        </div>

        <div className="">
          <Link to="/funding">
            {popularProject.map((project) => (
              <Card key={project.prod_no} project={project} />
            ))}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundingList;
