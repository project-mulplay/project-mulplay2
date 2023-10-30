import React, { useState } from "react";

import "./BasicInfo.css";
import MyDatePicker from "./DatePicker";
import CheckboxExample from "./Checkbox";
import SkillCheckbox from "./SkillCheckbox";
import StaffCheckbox from "./StaffCheckbox";
import TagCheckbox from "./TagCheckbox";
import ImageUploader from "./InputFile";

function BasicInfo() {
  const [formData, setFormData] = useState({
    prod_genre: "",
    prod_title: "",
    description: "",
    prod_opendate: "",
    prod_enddate: "",
    prod_mainimg: "",
    prod_goal: "",
    tdata_name: "",
    tdata_type: "",
    prod_time: "",
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

  // 태그 데이터 선택 -> tagdconnect에 저장 -> project에서 join을 통해 가져오기
  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  
  // const [data, setData] = useState(
  //   [1, 2, 3, 4]
  // )

  //  const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:3300/make/infotag', {prod_no:1, tdata_no:data});
  //     console.log('요청 성공:', response);
  //   } catch (error) {
  //     console.log(data);
  //     console.error('요청 실패:', error);
  //   }
  // };

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
          <option value="select">프로젝트 선택</option>
          <option value="web">웹</option>
          <option value="app">애플리케이션</option>
          <option value="software">일반 소프트웨어</option>
          <option value="game">게임</option>
          <option value="commerce">커머스 쇼핑몰</option>
          <option value="publishing">퍼블리싱</option>
          <option value="design">디자인</option>
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
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="프로젝트에 대한 설명을 간단하게 입력해주세요."
        />
      </div>
      <div class="custom-file-input">
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
      <div class="project-period">
        <label htmlFor="properiod">프로젝트 기한</label>
        <p>
          프로젝트 심사부터 리워드 제작기간 등 전체 일정을 고려해 설정해 주세요.
        </p>
        <MyDatePicker />
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
      <div className="pro_hashTag">
        <label htmlFor="prohashTag">주제 해시태그</label>
        <p>주제와 관련된 해시태그를 최소 1개 ~ 4개 미만으로 설정해 주세요. </p>
        <TagCheckbox
          name="tdata_name"
          value={formData.tdata_name}
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

      <div>
        <label htmlFor="staff">참여 인력</label>
        <p>
          프로젝트에 참여하는 포지션을 작성해 주세요.(예: Front-end개발자,
          디자이너)
        </p>
        <StaffCheckbox
          name="tdata_name"
          value={formData.tdata_name}
          onChange={handleChange}
        />
      </div>

      <div className="proskill">
        <label htmlFor="skill">관련 기술</label>
        <p>프로젝트에 사용되는 기술을 선택해 주세요. </p>
        <SkillCheckbox
          name="tdata_name"
          value={formData.tdata_name}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default BasicInfo;
