import React, { useState, useEffect } from "react";
import axios from "axios";

import "./BasicInfo.css";
import MyDatePicker from "./DatePicker";
import CheckboxExample from "./Checkbox";
import SkillCheckbox from "./SkillCheckbox";
import StaffCheckbox from "./StaffCheckbox";
import TagCheckbox from "./TagCheckbox";
import ImageUploader from "./InputFile";
import { useCookies } from "react-cookie";

function BasicInfo({ number }) {
  const savebtnstyle1 = {
    margin: "50px 60px",
    float: "left",
    border: "1px solid #EE833E",
    backgroundColor: "#fff",
    color: "#EE833E",
    fontSize: "18px",
    fontWeight: "500",
    width: "184px",
    height: "50px",
    borderRadius: "15px",
    cursor: "pointer",
  };

  const [cookies, setCookie] = useCookies();

  const LoginState = cookies.token;

  // 현재 날짜 '2023-10-30'
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
    2,
    "0"
  )}T${String(currentDate.getHours()).padStart(2, "0")}:${String(
    currentDate.getMinutes()
  ).padStart(2, "0")}:${String(currentDate.getSeconds()).padStart(2, "0")}`;

  // 오픈일 / 종료일
  const [dates, setDates] = useState({ openDate: "", endDate: "" });

  const handleDateChange = (key, value) => {
    setDates((prev) => ({ ...prev, [key]: value }));
  };

  // 유저 번호
  const userno = LoginState;

  // 데이터 DB 초기값
  const [formData, setFormData] = useState({
    prod_genre: 10,
    prod_title: "",
    prod_intro: "",
    prod_regdate: formattedDate,
    prod_mainimg:
      "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
    prod_content: "",
    prod_goal: "",
    prod_class: 0,
    prod_time: "",
    user_no: userno,
    img_no: 1,
  });

  useEffect(() => {
    if (dates.openDate && dates.endDate) {
      setFormData((prev) => ({
        ...prev,
        prod_opendate: dates.openDate,
        prod_enddate: dates.endDate,
      }));
    }
  }, [dates]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // 예시: 'prod_goal'을 숫자 값만 입력할 수 있도록 제한
    if (name === "prod_goal" || name === "prod_genre" || name === "prod_time") {
      // 빈 문자열 또는 비숫자 문자를 제거하고 숫자로 변환
      const numericValue = value.replace(/\D/g, ""); // 숫자 외의 문자 제거

      if (numericValue) {
        // 빈 문자열이 아닌 경우에만 처리
        const numericIntValue = parseInt(numericValue, 10);
        // 예시: 50,000부터 100,000,000 사이의 값만 허용
        if (numericIntValue >= 0 && numericIntValue <= 100000000) {
          setFormData({
            ...formData,
            [name]: numericIntValue,
          });
        }
        // 범위를 벗어난 경우 오류 메시지 표시 또는 사용자 알림
      } else {
        // 빈 문자열인 경우, 0 또는 다른 기본값으로 설정하거나 오류 처리
        setFormData({
          ...formData,
          [name]: "", // 혹은 다른 기본값 설정 가능
        });
      }
    } else {
      // 다른 필드의 경우 기존과 같이 처리
      setFormData({
        ...formData,
        [name]: value,
        // [name]: (name === "prod_genre" || name === "prod_time") ? parseInt(value, 10) : value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 여기에서 데이터를 제출하거나 원하는 작업을 수행합니다.
    console.log(formData);
    console.log(formData.prod_mainimg);

    try {
      const response = await axios.post(
        "http://localhost:3300/make/infoproject",
        formData
      );
      console.log("요청 성공:", response);
    } catch (error) {
      console.log(formData);
      console.error("요청 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="basicForm">
      <div>
        <label htmlFor="field">프로젝트 분야</label>
        <select
          name="prod_genre"
          id="profield"
          value={formData.prod_genre}
          onChange={handleChange}
        >
          <option value={10}>프로젝트 선택</option>
          <option value={0}>웹</option>
          <option value={1}>애플리케이션</option>
          <option value={2}>일반 소프트웨어</option>
          <option value={3}>게임</option>
          <option value={4}>커머스 쇼핑몰</option>
          <option value={5}>퍼블리싱</option>
          <option value={6}>디자인</option>
        </select>
      </div>
      <div>
        <label htmlFor="title">프로젝트 제목</label>
        <input
          type="text"
          id="protitle"
          name="prod_title"
          value={formData.prod_title}
          onChange={handleChange}
          placeholder="제목을 입력해주세요."
        />
      </div>
      <div>
        <label htmlFor="description">프로젝트 설명</label>
        <textarea
          type="text"
          id="prodescription"
          name="prod_intro"
          value={formData.prod_intro}
          onChange={handleChange}
          placeholder="프로젝트에 대한 설명을 간단하게 입력해주세요."
        />
      </div>
      <div className="custom-file-input">
        <label htmlFor="fileInput">대표 이미지</label>
        <p>
          프로젝트 썸네일 이미지를 한 개만 등록해주세요. <br />
          (10MB 이하의 JPG, JPEG, PNG 파일)
        </p>
        <ImageUploader
          name="prod_mainimg"
          value={formData.prod_mainimg}
          onChange={handleChange}
        />
      </div>
      <div className="project-period">
        <label htmlFor="properiod">프로젝트 기한</label>
        <p>
          프로젝트 심사부터 리워드 제작기간 등 전체 일정을 고려해 설정해 주세요.
        </p>
        <MyDatePicker onDateChange={handleDateChange} />
      </div>
      <div className="goalmoney">
        <label htmlFor="money">목표 금액</label>
        <p>최소 50만원 ~ 최대 1억원 사이에서 목표금액을 설정해 주세요.</p>
        <input
          type="text"
          id="promoney"
          name="prod_goal"
          value={formData.prod_goal}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="progress">진행 분류</label>
        <p>신규와 리뉴얼 중 하나를 선택해 주세요. </p>
        <CheckboxExample
          name="tdata_type"
          value={formData.tdata_type}
          onChange={handleChange}
        />
      </div>

      <div className="forecast">
        <label htmlFor="forecast">예상 기한</label>
        <p>예상 기한은 최소 30일 부터 365일 사이에서 설정해 주세요.</p>
        <input
          type="text"
          id="forecast"
          name="prod_time"
          value={formData.prod_time}
          onChange={handleChange}
        />
      </div>

      <button
        style={savebtnstyle1}
        type="submit"
        className="btn_signup"
        onClick={handleSubmit}
      >
        저장하기
      </button>
    </form>
  );
}

export default BasicInfo;
