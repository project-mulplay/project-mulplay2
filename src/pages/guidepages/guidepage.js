import React from "react";
import "./Guidepage.css";
import img1 from "../../assets/image/guide1.png";
import img2 from "../../assets/image/guide2.png";
import img3 from "../../assets/image/guide3.png";

//아코디언 QnA
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Guidepage = () => {
  return (
    <div className="Guidepage_wrap">
      <div className="Guidepage_contain">
        {/* 타이틀 1 */}
        <div className="Guide_title">
          <h2>누구나 쉽고 빠르게</h2>
          <h2>프로젝트를 시작할 수 있습니다.</h2>
          <br />
          <p>MULPLAY에서 시작과 성장을 함께 하세요</p>
        </div>
        {/* 가이드 이동 버튼 */}
        <div className="Guide_btn">
          <button className="Guide_btn1">창작자 가이드</button>
          <Link to="/project">
            <button className="Guide_btn2">지금 시작하기</button>
          </Link>
        </div>
        {/* 타이틀 2 */}
        <div className="Guide_subtitle">
          <h2>개발자를 위한 크라우드 펀딩</h2>
        </div>
        {/* 이미지 */}
        <div className="Guide_img">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        {/* 프로세스 =============================================== */}
        <div className="qualification">
          <div className="qualification_process">
            <div className="qual_text">
              <h2>프로젝트 진행 프로세스</h2>
              <p>
                MULPLAY와 전반적인 프로젝트 진행 프로세스이며, 프로젝트 유형에
                따라 진행이 변동이 있을 수 있습니다.
              </p>
            </div>
          </div>
          <div className="qualification__container">
            <div className="qualification__tabs">
              <div
                className="qualification__button button--flex qualification__active"
                data-target="#education"
              ></div>
            </div>
            <div className="qualification__sections">
              <div
                className="qualification__content qualification__active"
                data-content
                id="education"
              >
                <div className="qualification__data">
                  <div className="qualification_num">
                    <h2>01</h2>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">프로젝트 만들기</h3>
                    <span className="qualification__subtitle">
                      프로젝트 작성 폼의 내용을 전부 입력 후 제출하시면 됩니다.
                    </span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div className="qualification_num">
                    <h2>02</h2>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">
                      프로젝트 심사 및 승인
                    </h3>
                    <span className="qualification__subtitle">
                      프로젝트 제출 후 2주간의 내부 심사를 거쳐 프로젝트 승인과
                      거절 결과를 알려드립니다. 결과는 알림 및
                      마이페이지-프로젝트 관리에서 확인 하실 수 있습니다.
                    </span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div className="qualification_num">
                    <h2>03</h2>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">프로젝트 오픈 예정</h3>
                    <span className="qualification__subtitle">
                      승인된 프로젝트는 오픈 예정 리스트에 업로드 됩니다.
                    </span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div className="qualification_num">
                    <h2>04</h2>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">프로젝트 오픈</h3>
                    <span className="qualification__subtitle">
                      프로젝트가 오픈이 되면 후원자에게 펀딩을 받을 수 있습니다
                    </span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div className="qualification_num">
                    <h2>05</h2>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">펀딩 성사 및 정산</h3>
                    <span className="qualification__subtitle">
                      펀딩 기간 내에 목표 금액까지 달성하면 펀딩이 성사됩니다.
                      <br />
                      펀딩이 성사 후 프로젝트 작업을 하시면 됩니다.
                      <br />
                      *정산일은 결제 종료일 다음날부터 영업일 기준 7일 후
                      입니다.
                    </span>
                  </div>
                </div>
                <div className="qualification__data">
                  <div className="qualification_num">
                    <h2>06</h2>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">후원자 리워드 전달</h3>
                    <span className="qualification__subtitle">
                      프로젝트 완료 후, 후원자가 선택한 리워드가 전달 됩니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* QnA ========================================= */}
        <div className="Guide_accordion">
          <div className="Guide_subtitle">
            <h2>자주 묻는 질문</h2>
          </div>
          <BasicAccordion />
        </div>
      </div>
    </div>
  );
};

function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span
              style={{
                color: "#EE833E",
                fontSize: "20px",
                fontWeight: "600",
                marginRight: "15px",
              }}
            >
              Q
            </span>{" "}
            <span style={{ fontWeight: "600" }}>수수료는 어떻게 되나요?</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ borderTop: "5px solid #EE833E", marginTop: "10px" }}
          >
            <div style={{ marginTop: "20px" }}>
              <span
                style={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "20px",
                }}
              >
                A
              </span>
              <span style={{ fontWeight: "500", fontSize: "14px" }}>
                수수료는 어떻게 되나요?
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span
              style={{
                color: "#EE833E",
                fontSize: "20px",
                fontWeight: "600",
                marginRight: "15px",
              }}
            >
              Q
            </span>{" "}
            <span style={{ fontWeight: "600" }}>
              어떤 프로젝트를 진행할 수 있나요?
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ borderTop: "5px solid #EE833E", marginTop: "10px" }}
          >
            <div style={{ marginTop: "20px" }}>
              <span
                style={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "20px",
                  height: "180px",
                  float: "left",
                }}
              >
                A
              </span>
              <span style={{ fontWeight: "500", fontSize: "14px" }}>
                멀플레이는 IT 계열 모든 분야에서 활동하는 개발자들이 자유롭게
                프로젝트를 올리고 모금을 시작할 수 있는 열린 공간이지만,
                커뮤니티의 신뢰와 안전을 위해 모든 프로젝트는 심사 기준에 따라
                심사하고 있습니다.
                <br />
                <br />
                <br />
                자세한 심사 기준이 궁금하시다면{" "}
                <a style={{ color: "#EE833E" }}>여기</a>를 눌러주세요.
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span
              style={{
                color: "#EE833E",
                fontSize: "20px",
                fontWeight: "600",
                marginRight: "15px",
              }}
            >
              Q
            </span>{" "}
            <span style={{ fontWeight: "600" }}>정산금은 어떻게 받나요?</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ borderTop: "5px solid #EE833E", marginTop: "10px" }}
          >
            <div style={{ marginTop: "20px" }}>
              <span
                style={{
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginRight: "20px",
                }}
              >
                A
              </span>
              <span style={{ fontWeight: "500", fontSize: "14px" }}>
                정산금은 마이페이지-수입관리에서 완료된 프로젝트로 확인하실 수
                있습니다. 정산금은 수수료를 제외한 나머지 금액을 창작자님 계좌로
                보내드립니다.
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Guidepage;
