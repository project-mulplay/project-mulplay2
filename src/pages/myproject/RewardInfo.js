import React, { useState } from "react";
import "./RewardInfo.css";

import plusbtn from "../../assets/image/plusbtn.png";
//import { NextBtn, SubmitBtn } from "./NextBtn";

function RewardInfo() {
  const [formData, setFormData] = useState({
    reward_categori: "",
    reward_name: "",
    reward_price: "",
    reward_info: "",
  });

  // +버튼 클릭시 컴포넌트 추가
  const [newComponents, setNewComponents] = useState([]);

  const handleImageClick = () => {
    if (newComponents.length < 2) {
      // 최대 2개까지 컴포넌트를 추가합니다.
      setNewComponents([
        ...newComponents,
        <NewComponent key={newComponents.length} />,
      ]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 데이터를 제출하거나 원하는 작업을 수행합니다.
    console.log(formData);
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
        {newComponents}
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
            <option value="select">리워드 선택</option>
            <option value="basic">베이직</option>
            <option value="early-bird">얼리버드</option>
            <option value="super-early-bird">슈퍼 얼리버드</option>
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

      {/* <NextBtn /> */}
    </div>
  );
}

/////////////////////////////////////////////
// 새로 추가되는 컴포넌트//
function NewComponent() {
  const [formData, setFormData] = useState({
    reward_categori: "",
    reward_name: "",
    reward_price: "",
    reward_info: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 데이터를 제출하거나 원하는 작업을 수행합니다.
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="rewardForm">
      <div className="rewardType">
        <label htmlFor="retype">리워드 종류</label>
        <select
          name="reward_categori"
          id="reward_categori"
          value={formData.reward_categori}
          onChange={handleChange}
        >
          <option value="select">리워드 선택</option>
          <option value="basic">베이직</option>
          <option value="early-bird">얼리버드</option>
          <option value="super-early-bird">슈퍼 얼리버드</option>
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
  );
}

export default RewardInfo;
