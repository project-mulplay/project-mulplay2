import React, { useState, useEffect } from "react";
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
  const [selectName, setSelectName] = useState("전체");
  const [order, setOrder] = useState(projectData);

  useEffect(() => {
    const filteredProjects = projectData
      .filter((project) => {
        return (
          selectedTab === "all" || project.prod_genre === parseInt(selectedTab)
        );
      })
      .slice(0, 12);

    setOrder(filteredProjects);
  }, [selectedTab]);

  const handleBestClick = () => {
    const sortedBestList = [...order];
    sortedBestList.sort((a, b) => {
      if (a.prod_title && b.prod_title) {
        return a.prod_title.toLowerCase() < b.prod_title.toLowerCase() ? -1 : 1;
      }
    });
    setOrder(sortedBestList);
  };

  const handleRecentClick = () => {
    const sortedRecentList = [...order];
    sortedRecentList.sort((a, b) => {
      return new Date(b.prod_regdate) - new Date(a.prod_regdate);
    });
    setOrder(sortedRecentList);
  };

  const handleResetClick = () => {
    // 현재 상태와 원래 순서를 비교하여 원래 순서로 돌아가도록 함
    if (JSON.stringify(order) !== JSON.stringify(projectData)) {
      setOrder(projectData);
    }
  };

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

  return (
    <div className="fundinglistpage">
      <div className="fundinglist_tab">
        {selectOptionList.map((option) => (
          <button
            key={option.value}
            className={selectedTab === option.value ? "active" : ""}
            onClick={() => {
              setSelectedTab(option.value);
              setSelectName(option.name);
            }}
          >
            <div>
              <img src={option.image} alt="" width={50} />
            </div>
            {option.name}
          </button>
        ))}
      </div>
      <div className="fundinglist_contents">
        <div className="fundinglist_title">
          <h1>{selectName}</h1>
          <div className="fundinglist_title_tab">
            <label
              onClick={() => {
                handleBestClick();
                handleResetClick();
              }}
            >
              추천순
            </label>
            <label
              onClick={() => {
                handleRecentClick();
                handleResetClick();
              }}
            >
              최신순
            </label>
          </div>
        </div>

        <div className="">
          {order.map((project) => (
            <Link to={`/funding/${project.prod_no}`} key={project.prod_no}>
              <Card project={project} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundingList;
