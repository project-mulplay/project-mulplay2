import React from "react";
import { useState, useEffect } from "react";
import "./Funding.css";
import Button_funding from "../../components/elements/Button_funding";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import projectData from "../../data/projectData.json";
import userData from "../../data/userData.json";
import OnHeart from "../../assets/image/on_heart.png";
import OffHeart from "../../assets/image/off_heart.png";
import Share from "../../assets/image/share.png";
import axios from "../../util/api";
import { useCookies } from 'react-cookie';
// 아이콘
import { FaRegClock, FaBox, FaUserCircle, FaWrench } from "react-icons/fa";

// 게이지 바
import { Progress, Tooltip } from "antd";

//Atom
import Reward from "../store/Reward";
import MainReward from "../store/MainReward";

// 리워드 박스
import { Drawer } from "antd";

const Funding = () => {
  // JSON project_no 불러오기

  const { prod_no } = useParams();

  const [cookies, setCookie] = useCookies();

  const LoginState = cookies.token;

  // API
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3300/project/funding", {
  //       params: {
  //         prod_no: 1,
  //       },
  //     })
  //     .then((response) => {
  //       // 요청 성공 시 실행할 코드
  //       setData(response.data);
  //       console.log("요청 성공:", response);
  //     })
  //     .catch((error) => {
  //       // 에러 처리
  //       console.error("요청 실패:", error);
  //     });
  // }, []);

  // 결제 페이지 이동 네비게이션
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/Cart");
  };

  // 프로젝트 번호
  const i = prod_no - 1;
  // 프로젝트 분류 0: 리뉴얼, 1: 유지보수
  const pclass = projectData[i].prod_class < 1 ? "리뉴얼" : "유지보수";

  // 게이지 퍼센트
  const progress =
    projectData[i].prod_goal > 0
      ? Math.floor(
          (projectData[i].prod_current / projectData[i].prod_goal) * 100
        )
      : 0;

  // 금액 숫자 단위 끊기
  const currentmoney = projectData[i].prod_current.toLocaleString();
  const goalmoney = projectData[i].prod_goal.toLocaleString();

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

  // 특정 prod_no 가져오기 여기서는 1에 해당하는 json 데이터를 가져옴
  const filteredData = projectData.filter((data) => data.prod_no === i+1);
  // 상세보기 버튼
  const [showAllContent, setShowAllContent] = useState(false);
  const toggleContent = () => {
    setShowAllContent(!showAllContent);
  };

  // console.log(projectData[i].prod_intro);

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
              <div className="fintro"><p>{projectData[i].prod_intro}</p></div>
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
                {projectData[i].prod_hashtag.map((hashtag, index) => (
                  <div key={index} className="fund_tag">
                    {hashtag}
                  </div>
                ))}
                {/* <div className="fund_tag">{projectData[i].prod_hashtag[0]}</div>
                <div className="fund_tag">{projectData[i].prod_hashtag[1]}</div> */}
              </div>
              <div className="time">
                <div className="fund_icon">
                  <FaRegClock />
                </div>
                <span className="mr1-title">예상 기간</span>
                <div className="mr1-textwrap">
                <div className="mr1-text">{projectData[i].prod_time}일</div>
                </div>
              </div>
              <div className="class">
                <div className="fund_icon">
                  <FaBox />
                </div>
                <span className="mr1-title">진행 분류</span>
                <div className="mr1-textwrap">
                <div className="mr1-text">{pclass}</div>
                </div>
              </div>
              <div className="people">
                <div className="fund_icon">
                  <FaUserCircle />
                </div>
                <span className="mr1-title">참여 인력</span>
                <div className="mr1-textwrap">
                {projectData[i].prod_people.map((people, index) => (
                  <div key={index} className="mr1-text">
                    {people}
                  </div>
                ))}
                </div>
              </div>
              <div className="stack">
                <div className="fund_icon">
                  <FaWrench />
                </div>
                <span className="mr1-title">관련 기술</span>
                <div className="mr1-textwrap">
                {projectData[i].prod_skill.map((skill, index) => (
                  <div key={index} className="mr1-text">
                    {skill}
                  </div>
                ))}
                </div>
              </div>
            </div>
            {/* 프로젝트 내용2: 모인금액, 목표금액, 펀딩기간 */}
            <div className="middle-right-2">
              <div className="current-text">모인금액</div>
              <div className="current">{currentmoney}원</div>
              <Tooltip title="3 done / 3 in progress / 4 to do">
                <Progress
                  style={{ width: "340px", margin: "0 auto 20px" }}
                  percent={progress}
                  status="active"
                  strokeColor={{
                    from: "#EE833E",
                    to: "#EE833E",
                  }}
                />
              </Tooltip>
              <div className="goal">
                <span className="mr1-title2">목표금액</span>
                <div className="mr1-text2">{goalmoney}원</div>
              </div>
              <div className="date">
                <span className="mr1-title2">펀딩기간</span>
                <div className="mr1-text2">
                  {projectData[i].prod_opendate} ~ {projectData[i].prod_enddate}
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
                <div className="fbtn3">
                  {LoginState ? 
              <Link to={`/cart/${prod_no}`}>
                  <Button_funding
                    text={"펀딩하기"}
                    fontSize={14}
                    maxWidth={240}
                    minWidth={240}
                    minHeight={45}
                    borderRadius={10}
                    onClick={goToCart}
                  />
              </Link> :
              <Link to={'/login'}>
              <Button_funding
                text={"로그인 하러 가기"}
                fontSize={14}
                maxWidth={240}
                minWidth={240}
                minHeight={45}
                borderRadius={10}
                onClick={goToCart}
              />
            </Link>
              }
                </div>
            </div>
          </div>
        </div>

        {/* 상세보기 및 리워드 선택 */}
        <div className="top2"></div>

        {/* 상세보기 */}
        <div className="middle2">
          <div className="middle2-left2">
            <div className="ml2-component">
              {filteredData.map((data, i) => (
                <div key={i}>
                  {data.prod_content.split("\n").map((content, index) => {
                    if (!showAllContent && index > 5) {
                      // 내용이 5줄을 넘어가면 버튼을 보여줌
                      return null;
                    }

                    if (
                      content.includes(".jpg") ||
                      content.includes(".webp") ||
                      content.includes(".png") ||
                      content.includes(".jpeg")
                    ) {
                      // 이미지 주소인 경우 이미지로 렌더링
                      return (
                        <img
                          key={index}
                          src={content}
                          alt={`Image ${index}`}
                          style={{ width: "700px" }}
                        />
                      );
                    } else {
                      // 텍스트인 경우 그대로 렌더링
                      return (
                        <p className="prod_content_text" key={index}>
                          {content}
                          <br />
                        </p>
                      );
                    }
                  })}
                  {filteredData[0].prod_content.split("\n").length > 5 && (
                    <button className="search-btn" onClick={toggleContent}>
                      {showAllContent ? "접기" : "더 보기"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 리워드 선택 */}
          <div className="middle2-right">
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
              리워드 선택
              <div>
                <button className="cartshow-btn" onClick={setOpen}>
                  장바구니 보기
                </button>
                <Drawer
                  title="Basic Drawer"
                  placement="right"
                  onClose={onClose}
                  open={open}
                >
                  <Reward />
                </Drawer>
              </div>
            </div>

            <MainReward prodNo={prod_no}/>
          </div>
        </div>
        {/* <div className="bottom">
          <div className="top">
            <h1>프로젝트 더보기</h1>
          </div>
        </div> */}
      </div>
      {/* <div>
            <Footer />
        </div> */}
    </div>
  );
};

export default Funding;
