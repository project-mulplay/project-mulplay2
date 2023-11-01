import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectedTabState,
  projectDataState,
} from "../../../recoil/MyProjectAtom";

import axios from "axios";

import MyCard from "./MyCard";
import "../../../pages/mypages/MyProjectManage.css";

const filterOptionListCreated = [
  { value: "all", name: "전체" },
  { value: "0", name: "심사중" },
  { value: "1", name: "심사완료" },
  { value: "2", name: "심사반려" },
  { value: "3", name: "펀딩중" },
  { value: "4", name: "펀딩성공" },
  { value: "5", name: "펀딩실패" },
  { value: "6", name: "보류" },
];

const filterOptionListLiked = [
  { value: "all", name: "전체" },
  { value: "3", name: "펀딩중" },
  { value: "4", name: "펀딩성공" },
  { value: "5", name: "펀딩실패" },
];

const ProjectManager = ({ type }) => {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState);
  const [data, setData] = useRecoilState(projectDataState);

  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/myproject", {
        params: {
          user_no: cookies.token,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log("요청 성공:", response);
      })
      .catch((error) => {
        console.error("요청 실패:", error);
      });
  }, []);

  let filterOptions;

  switch (type) {
    case "created":
      filterOptions = filterOptionListCreated;
      break;
    case "liked":
      filterOptions = filterOptionListLiked;
      break;
    case "funded":
      filterOptions = filterOptionListLiked; // Funded and Liked share the same options
      break;
    default:
      return null;
  }

  const isLikedOrFunded = type === "liked" || type === "funded";
  // 프로젝트 상태에 따라 필터링된 프로젝트 목록을 생성
  const filteredProjects = data.filter((project) => {
    if (selectedTab === "all") {
      if (isLikedOrFunded) {
        // 'liked'나 'funded' 타입에서는 '전체' 탭이 선택되었을 때 prod_stat이 3 또는 4인 프로젝트만 표시
        return (
          project.prod_stat === 3 ||
          project.prod_stat === 4 ||
          project.prod_stat === 5
        );
      } else {
        // 'created' 타입에서는 '전체' 탭이 선택되었을 때 모든 프로젝트를 표시
        return true;
      }
    }
    return project.prod_stat === parseInt(selectedTab);
  });

  // 프로젝트 상태에 따라 텍스트를 반환
  const getStateText = (prod_stat) => {
    switch (prod_stat) {
      case 0:
        return "심사중";
      case 1:
        return "심사완료";
      case 2:
        return "심사반려";
      case 3:
        return "펀딩중";
      case 4:
        return "펀딩성공";
      case 5:
        return "펀딩실패";
      case 6:
        return "보류";
      default:
        return "정보없음";
    }
  };

  // 프로젝트 상태에 따라 CSS 클래스를 반환
  const getStateType = (prod_stat) => {
    if (prod_stat === 1 || prod_stat === 4) {
      return "neutral";
    }
    if (prod_stat === 0 || prod_stat === 3) {
      return "positive";
    } else if (prod_stat === 2 || prod_stat === 5) {
      return "negative";
    } else if (prod_stat === 6) {
      return "hold";
    } else {
      return "neutral";
    }
  };

  return (
    <div className="myProjectManage">
      <div className="tabContainer">
        {/* Filter options */}
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className={selectedTab === option.value ? "active" : ""}
            onClick={() => setSelectedTab(option.value)}
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="projectList">
        {/* Project cards */}
        {filteredProjects.map((project) => (
          <MyCard
            key={project.prod_no}
            project={project}
            type={type}
            stateText={getStateText(project.prod_stat)}
            stateType={getStateType(project.prod_stat)}
            fundPrice={
              type === "liked" || type === "funded" ? project.pay_price : null
            }
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectManager;
