import React, { useState } from "react";
import axios from "axios";

import "./BasicInfo.css";
import MyDatePicker from "./DatePicker";
import CheckboxExample from "./Checkbox";
import SkillCheckbox from "./SkillCheckbox";
import StaffCheckbox from "./StaffCheckbox";
import TagCheckbox from "./TagCheckbox";
import ImageUploader from "./InputFile";

function TagInfo({ number }) {
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

  const [formData, setFormData] = useState({});

  const [data, setData] = useState([]);

  const handleCheckboxChange = (name, value) => {
    if (value === null) {
      console.log(`체크박스 ${name}의 값이 삭제되었습니다.`);
      console.log({ value });
      setData(data.filter((item) => item.name !== name));
    } else {
      console.log(`체크박스 ${name}의 값: ${value}`);
      console.log({ value });
      setData([...data, { name: name, value: value }]);
    }
  };
  console.log(data.map((item) => item.value));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3300/make/infotag", {
        prod_no: number + 1,
        tdata_no: data.map((item) => item.value),
      });
      console.log("요청 성공:", response);
    } catch (error) {
      console.log(data);
      console.error("요청 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="basicForm">
      <div className="pro_hashTag">
        <label htmlFor="prohashTag">주제 해시태그</label>
        <p>주제와 관련된 해시태그를 최대 2개까지 선택해 주세요. </p>
        <TagCheckbox name="tdata_name" onChange={handleCheckboxChange} />
      </div>

      <div>
        <label htmlFor="staff">참여 인력</label>
        <p>
          프로젝트에 참여하는 포지션을 작성해 주세요.(예: Front-end개발자,
          디자이너)
        </p>
        <StaffCheckbox name="tdata_name" onChange={handleCheckboxChange} />
      </div>

      <div className="proskill">
        <label htmlFor="skill">관련 기술</label>
        <p>프로젝트에 사용되는 기술을 선택해 주세요. </p>
        <SkillCheckbox name="tdata_name" onChange={handleCheckboxChange} />
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

export default TagInfo;
