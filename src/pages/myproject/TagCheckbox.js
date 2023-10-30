import React, { useState, useEffect } from "react";

function TagCheckbox({ onChange }) {
  const [tagCheckboxes, settagCheckboxes] = useState({
    tagcheckbox1: false,
    tagcheckbox2: false,
    tagcheckbox3: false,
    tagcheckbox4: false,
    tagcheckbox5: false,
    tagcheckbox6: false,
    tagcheckbox7: false,
    tagcheckbox8: false,
    tagcheckbox9: false,
    tagcheckbox10: false,
  });
  

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (name, value) => {
    settagCheckboxes((prevCheckboxes) => {
      // 체크박스 상태를 변경
      const newCheckboxes = { ...prevCheckboxes };
      newCheckboxes[name] = !newCheckboxes[name]; // 상태를 반전 혹은 토글

      // 해당 체크박스가 체크되었을 때 value를 전달, 아니라면 value 삭제
      if (newCheckboxes[name]) {
        onChange(name, value); // value를 부모 컴포넌트로 전달
      } else {
        onChange(name, null); // value를 삭제
      }

      return newCheckboxes; // 변경된 상태 반환
    });
  };

  // 전체 스타일
  const checkboxContainer = {
    marginTop: "10px",
    display: "grid", // display 속성을 "grid"로 변경
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", // 5개의 열
    gridTemplateRows: "1fr 1fr", // 2개의 행
  };
  // 레이블 스타일
  const labelStyle = {
    width: "110px",
    height: "50px",
    border: "1px solid #d1d1d1",
    borderRadius: "50px",
    margin: "0 10px 10px 0",
    cursor: "pointer",
  };
  const pStyle = {
    // <p> 태그 스타일
    margin: "0 auto",
    color: "#555",
    fontSize: "16px",
    fontWeight: "400",
  };

  const checkboxStyle = {
    display: "none",
  };

  // 여기서 해당 체크박스의 상태에 따라 스타일을 변경합니다.
  const getLabelStyle = (name) => {
    return {
      ...labelStyle,
      backgroundColor: tagCheckboxes[name] ? "#EE833E" : "white",
    };
  };

  return (
    <div style={checkboxContainer}>
      <label style={getLabelStyle("tagcheckbox1")} id="taglbl1">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox1}
          onChange={() => handleCheckboxChange("tagcheckbox1", 1)}
          value={1}
          id="tagcheckbox1"
        />
        <p style={pStyle}>금융 </p>
      </label>
      <label style={getLabelStyle("tagcheckbox2")} id="taglbl2">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox2}
          onChange={() => handleCheckboxChange("tagcheckbox2", 2)}
          id="tagcheckbox2"
          value={2}
        />
        <p style={pStyle}>교육</p>
      </label>
      <label style={getLabelStyle("tagcheckbox3")} id="taglbl3">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox3}
          onChange={() => handleCheckboxChange("tagcheckbox3", 3)}
          id="tagcheckbox3"
          value={3}
        />
        <p style={pStyle}>여행</p>
      </label>
      <label style={getLabelStyle("tagcheckbox4")} id="taglbl4">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox4}
          onChange={() => handleCheckboxChange("tagcheckbox4", 4)}
          id="tagcheckbox4"
          value={4}
        />
        <p style={pStyle}>건강 </p>
      </label>
      <label style={getLabelStyle("tagcheckbox5")} id="taglbl5">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox5}
          onChange={() => handleCheckboxChange("tagcheckbox5", 5)}
          id="tagcheckbox5"
          value={5}
        />
        <p style={pStyle}>게임</p>
      </label>
      <label style={getLabelStyle("tagcheckbox6")} id="taglbl6">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox6}
          onChange={() => handleCheckboxChange("tagcheckbox6", 6)}
          id="tagcheckbox6"
          value={6}
        />
        <p style={pStyle}>식품</p>
      </label>
      <label style={getLabelStyle("tagcheckbox7")} id="taglbl7">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox7}
          onChange={() => handleCheckboxChange("tagcheckbox7", 7)}
          id="tagcheckbox7"
          value={7}
        />
        <p style={pStyle}>패션</p>
      </label>
      <label style={getLabelStyle("tagcheckbox8")} id="taglbl8">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox8}
          onChange={() => handleCheckboxChange("tagcheckbox8", 8)}
          id="tagcheckbox8"
          value={8}
        />
        <p style={pStyle}>커뮤니티</p>
      </label>
      <label style={getLabelStyle("tagcheckbox9")} id="taglbl9">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox9}
          onChange={() => handleCheckboxChange("tagcheckbox9", 9)}
          id="tagcheckbox9"
          value={9}
        />
        <p style={pStyle}>항공</p>
      </label>
      <label style={getLabelStyle("tagcheckbox10")} id="taglbl10">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox10}
          onChange={() => handleCheckboxChange("tagcheckbox10", 10)}
          id="tagcheckbox10"
          value={10}
        />
        <p style={pStyle}>문화</p>
      </label>
    </div>
  );
}

export default TagCheckbox;
