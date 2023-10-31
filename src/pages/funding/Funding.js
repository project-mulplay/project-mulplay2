import React from "react";
import { useState, useEffect} from "react";
import "./Funding.css";
import Button_funding from "../../components/elements/Button_funding";
import { useNavigate } from "react-router-dom";
import { Router, Route, Routes, BrowserRouter, Link } from "react-router-dom";
import tdataData from "../../data/tdataData.json";
import projectData from "../../data/projectData.json";
import userData from "../../data/userData.json";
import OnHeart from "../../assets/image/on_heart.png";
import OffHeart from "../../assets/image/off_heart.png";
import Share from "../../assets/image/share.png";
import Fundingtab from "../../components/elements/Tab";
import axios from "axios";
import rewardData from "../../data/rewardData.json";

import Reward from "../store/Reward";
import MainReward from "../store/MainReward";

//Atom

// 리워드 박스
import OutlinedCard from "./RewardCard";
import { Drawer } from "antd";

const Funding = () => {
    // API
    const [data, setData] = useState({});

    useEffect(() => {
      axios
        .get("http://localhost:3300/project/funding", {
          params: {
            prod_no: 1,
          },
        })
        .then((response) => {
          // 요청 성공 시 실행할 코드
          setData(response.data);
          console.log("요청 성공:", response);
        })
        .catch((error) => {
          // 에러 처리
          console.error("요청 실패:", error);
        });
    }, []);

  // 결제 페이지 이동 네비게이션
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/Cart");
  };

  // 프로젝트 번호
  const i = 0;
  // 프로젝트 분류 0: 리뉴얼, 1: 유지보수
  const pclass = projectData[i].prod_class < 1 ? "리뉴얼" : "유지보수";

  // 하트 on/off
  const [heartResults, setHeartResults] = React.useState(false);
  const onClick = () => {
    if (heartResults === false) {
      setHeartResults(true);
    } else {
      setHeartResults(false);
    }
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };




  return (
    <div>
      {/* <div className="nav">
            <LoggedOutHeader />
        </div> */}
      <div className="fund_container">
        {/* 타이틀 */}
        <div className="top">
          <h1>{projectData[i].prod_title}</h1>
        </div>
        <div className="middle">
          {/* 이미지 및 소개 내용, 작성자 정보 */}
          <div className="middle-left1">
            <div className="middle-left1-1">
              <img
                className="ml-image"
                alt=""
                src={projectData[i].prod_mainimg}
              ></img>
            </div>
            <div className="middle-left1-2">
              <div className="fintro">{projectData[i].prod_intro}</div>
              <div className="fmaker">
                <div className="fmaker-text">
                  <b>등록자 정보</b>
                </div>{" "}
                {userData[projectData[i].user_no].user_id}{" "}
                {userData[projectData[i].user_no].user_phone}
              </div>
            </div>
          </div>
          {/* 프로젝트 내용1: 해쉬태그, 기간, 분류, 인력, 기술 */}
          <div className="middle-right">
            <div className="middle-right-1">
              <div className="fund_hashtag">
                <div className="fund_tag">{tdataData[0].tdata_name}</div>
                <div className="fund_tag">{tdataData[1].tdata_name}</div>
                <div className="fund_tag">{tdataData[2].tdata_name}</div>
                <div className="fund_tag">{tdataData[3].tdata_name}</div>
              </div>
              <div className="time">
                <span className="mr1-title">예상 기간</span>
                <div className="mr1-text">{projectData[0].prod_time}일</div>
              </div>
              <div className="class">
                <span className="mr1-title">진행 분류</span>
                <div className="mr1-text">{pclass}</div>
              </div>
              <div className="people">
                <span className="mr1-title">참여 인력</span>
                <div className="mr1-text">{tdataData[7].tdata_name}</div>
                <div className="mr1-text">{tdataData[8].tdata_name}</div>
                <div className="mr1-text">{tdataData[10].tdata_name}</div>
              </div>
              <div className="stack">
                <span className="mr1-title">관련 기술</span>
                <div className="mr1-text">{tdataData[11].tdata_name}</div>
                <div className="mr1-text">{tdataData[12].tdata_name}</div>
                <div className="mr1-text">{tdataData[14].tdata_name}</div>
              </div>
            </div>
            {/* 프로젝트 내용2: 모인금액, 목표금액, 펀딩기간 */}
            <div className="middle-right-2">
              <div className="current-text">모인금액</div>
              <div className="current">100억(표현예정)</div>
              <div className="goal">
                <span className="mr1-title">목표금액</span>
                <div className="mr1-text">{projectData[i].prod_current}원</div>
              </div>
              <div className="date">
                <span className="mr1-title">펀딩기간</span>
                <div className="mr1-text">
                  {projectData[i].prod_opendate}~{projectData[i].prod_enddate}
                </div>
              </div>
            </div>
            {/* 버튼 */}
            <div className="middle-right-3">
              {/* <div className="fbtn1"><img className="sidebtn" src={OffHeart} alt="" onClick={onClick}/></div> */}
              {/* 찜하기 */}
              {heartResults ? (
                <div className="fbtn1">
                  <img
                    className="sidebtn1"
                    src={OnHeart}
                    alt=""
                    onClick={onClick}
                  />
                </div>
              ) : (
                <div className="fbtn1">
                  <img
                    className="sidebtn2"
                    src={OffHeart}
                    alt=""
                    onClick={onClick}
                  />
                </div>
              )}
              {/* 공유하기 */}
              <div className="fbtn2">
                <img className="sidebtn2" src={Share} alt="" />
              </div>
              {/* 펀딩하기 */}
              <Link to="/cart">
                <div className="fbtn3">
                  <Button_funding
                    text={"펀딩하기"}
                    fontSize={14}
                    maxWidth={240}
                    minWidth={240}
                    minHeight={45}
                    borderRadius={10}
                    onClick={goToCart}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 상세보기 및 리워드 선택 */}
        <div className="top2">
          
        </div>

        {/* 상세보기 */}
        <div className="middle2">
          <div className="middle2-left2">
            <div className="ml2-component">
              <p>{projectData[i].prod_content}</p>
              <p>{projectData[i].prod_content}</p>
              <p><img src={projectData[2].prod_mainimg} alt="" width="400px"/></p>
              <p>{projectData[i].prod_content}</p>
              <Search />
            </div>
          </div>

          {/* 리워드 선택 */}
          <div className="middle2-right">
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
              리워드 선택
              <div>
                <button className="cartshow-btn" onClick={setOpen}>장바구니 보기</button>
                <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                open={open}
              >
                <Reward/>
              </Drawer>
              </div>
            </div>
            
            <MainReward />
            {/* <div className="middle2-right-1">
              <OutlinedCard fcard={0} />
            </div>
            <div className="middle2-right-2">
              <OutlinedCard fcard={1} />
            </div>
            <div className="middle2-right-3">
              <OutlinedCard fcard={2} />
            </div>
            <div className="middle2-right-3">
              <OutlinedCard fcard={3} />
            </div> */}
          </div>
        </div>
        <div className="bottom">
          <div className="top">
            <h1>프로젝트 더보기</h1>
          </div>
        </div>
      </div>
      {/* <div>
            <Footer />
        </div> */}
    </div>
  );
};

// 상세보기 버튼
const Search = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => {
    if (showResults === false) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };
  return (
    <div>
       {showResults ? <Results /> : null}
       {showResults ?
      <input
        className="search-btn"
        type="submit"
        value="접기"
        onClick={onClick}
      /> :
      <input
        className="search-btn"
        type="submit"
        value="상세보기"
        onClick={onClick}
      />
       }
    </div>
  );
};

// 상세보기 숨겨진 내용
const Results = () => (
  <div id="results" className="search-results">
    {projectData[1].prod_content}
    <img src={projectData[1].prod_mainimg} alt="" />
    {projectData[1].prod_content}
  </div>
);

export default Funding;
