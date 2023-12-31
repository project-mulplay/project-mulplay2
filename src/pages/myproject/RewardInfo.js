import React, { useState } from "react";
import axios from "axios";
import "./RewardInfo.css";

import plusbtn from "../../assets/image/plusbtn.png";
//import { NextBtn, SubmitBtn } from "./NextBtn";

function RewardInfo({number}) {

  const savebtnstyle = {
    margin: "50px 60px",
    right: "260px",
    float: 'left',
    backgroundColor: "#fff",
    border: "1px solid #EE833E",
    color: "#EE833E",
    fontSize: "18px",
    fontWeight: "500",
    width: "184px",
    height: "50px",
    borderRadius: "15px",
    cursor: "pointer",
  };


  const [formData, setFormData] = useState({
    reward_categori: 10,
    reward_name: "",
    reward_price: "",
    reward_info: "",
    prod_no: number+1,
  });

  // +버튼 클릭시 컴포넌트 추가
  const [newComponents, setNewComponents] = useState([]);

  const handleImageClick = () => {
    if (newComponents.length < 2) {
      // 최대 2개까지 컴포넌트를 추가합니다.
      setNewComponents([
        ...newComponents,
        <NewComponent pronum={number+1} key={newComponents.length} />,
      ]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'reward_categori' || name === "reward_price") {
      // 빈 문자열 또는 비숫자 문자를 제거하고 숫자로 변환
      const numericValue = value.replace(/\D/g, ''); // 숫자 외의 문자 제거
  
      if (numericValue) { // 빈 문자열이 아닌 경우에만 처리
        const numericIntValue = parseInt(numericValue, 10);
        // 예시: 50,000부터 100,000,000 사이의 값만 허용
        if (numericIntValue >= 0 && numericIntValue <= 100000000) {
          setFormData({
            ...formData,
            [name]: numericIntValue
          });
        }
        // 범위를 벗어난 경우 오류 메시지 표시 또는 사용자 알림
      } else {
        // 빈 문자열인 경우, 0 또는 다른 기본값으로 설정하거나 오류 처리
        setFormData({
          ...formData,
          [name]: '' // 혹은 다른 기본값 설정 가능
        });
      }
    } else {
      // 다른 필드의 경우 기존과 같이 처리
      setFormData({
        ...formData,
        [name]: value
        // [name]: (name === "prod_genre" || name === "prod_time") ? parseInt(value, 10) : value
      });
    }

    // setFormData({
    //   ...formData,
    //   [name]: (name === "reward_categori" || name === "reward_price") ? parseInt(value, 10) : value,
    // });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 여기에서 데이터를 제출하거나 원하는 작업을 수행합니다.
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:3300/make/inforeward', formData);
      console.log('요청 성공:', response);
    } catch (error) {
      console.log(formData);
      console.error('요청 실패:', error);
    }
  };

  return (
    <div id="rewardInfo">
      <p className="rewardtt"> 리워드 정보 </p>
      <>
        <img
          className="plusbtn"
          src={plusbtn}
          alt="추가버튼"
          onClick={handleImageClick}
        />
        
      </>

      <form onSubmit={handleSubmit} className="rewardForm">
        <div className="rewardType">
          <label htmlFor="retype">리워드 종류</label>
          <select
            name="reward_categori"
            id="reward_categori"
            value={formData.reward_categori}
            onChange={handleChange}
          >
            <option value={10}>리워드 선택</option>
            <option value={0}>베이직</option>
            <option value={1}>얼리버드</option>
            <option value={2}>슈퍼 얼리버드</option>
          </select>
        </div>
        <div className="rewardMoney">
          <label htmlFor="remoney">금액</label>
          <input
            type="text"
            id="reward_price"
            name="reward_price"
            value={formData.reward_price}
            onChange={handleChange}
          />
        </div>
        <div className="rewardTitle">
          <label htmlFor="retitle">제목</label>
          <input
            type="text"
            id="reward_name"
            name="reward_name"
            value={formData.reward_name}
            onChange={handleChange}
            placeholder="제목을 입력해주세요."
          />
        </div>
        <div className="rewardDescription">
          <label htmlFor="redescription">설명</label>
          <textarea
            type="text"
            id="reward_info"
            name="reward_info"
            value={formData.reward_info}
            onChange={handleChange}
          />
        </div>

      </form>
        <button style={savebtnstyle} type="submit" className="btn_signup" onClick={handleSubmit}>저장하기</button>
        {newComponents}
      {/* <NextBtn /> */}
    </div>
  );
}

/////////////////////////////////////////////
// 새로 추가되는 컴포넌트//
function NewComponent({pronum}) {
  const savebtnstyle = {
    margin: "50px 60px",
    right: "260px",
    float: 'left',
    backgroundColor: "#fff",
    border: "1px solid #EE833E",
    color: "#EE833E",
    fontSize: "18px",
    fontWeight: "500",
    width: "184px",
    height: "50px",
    borderRadius: "15px",
    cursor: "pointer",
  };

  const [formData, setFormData] = useState({
    reward_categori: 10,
    reward_name: "",
    reward_price: 0,
    reward_info: "",
    prod_no: pronum,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 여기에서 데이터를 제출하거나 원하는 작업을 수행합니다.
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:3300/make/inforeward', formData);
      console.log('요청 성공:', response);
    } catch (error) {
      console.log(formData);
      console.error('요청 실패:', error);
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit} className="rewardForm">
      <div className="rewardType">
        <label htmlFor="retype">리워드 종류</label>
        <select
          name="reward_categori"
          id="reward_categori"
          value={formData.reward_categori}
          onChange={handleChange}
        >
          <option value={10}>리워드 선택</option>
            <option value={0}>베이직</option>
            <option value={1}>얼리버드</option>
            <option value={2}>슈퍼 얼리버드</option>
        </select>
      </div>
      <div className="rewardMoney">
        <label htmlFor="remoney">금액</label>
        <input
          type="text"
          id="reward_price"
          name="reward_price"
          value={formData.reward_price}
          onChange={handleChange}
        />
      </div>
      <div className="rewardTitle">
        <label htmlFor="retitle">제목</label>
        <input
          type="text"
          id="reward_name"
          name="reward_name"
          value={formData.reward_name}
          onChange={handleChange}
          placeholder="제목을 입력해주세요."
        />
      </div>
      <div className="rewardDescription">
        <label htmlFor="redescription">설명</label>
        <textarea
          type="text"
          id="reward_info"
          name="reward_info"
          value={formData.reward_info}
          onChange={handleChange}
        />
      </div>
    </form>
      <button style={savebtnstyle} type="submit" className="btn_signup" onClick={handleSubmit}>저장하기</button>
    </>
  );
}

export default RewardInfo;
