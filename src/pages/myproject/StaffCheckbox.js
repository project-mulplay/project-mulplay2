import React, { useState, useEffect } from "react";

function StaffCheckbox({ onChange }) {
  const [stfCheckboxes, setStfCheckboxes] = useState({
    stfcheckbox1: false,
    stfcheckbox2: false,
    stfcheckbox3: false,
    stfcheckbox4: false,
    stfcheckbox5: false,
    stfcheckbox6: false,
    stfcheckbox7: false,
    stfcheckbox8: false,
    stfcheckbox9: false,
    stfcheckbox10: false,
  });
  
 // 체크박스 상태 변경 함수
 const handleCheckboxChange = (name, value) => {
  setStfCheckboxes((prevCheckboxes) => {
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
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "center",
  };

  const checkboxStyle = {
    display: "none",
  };

 // 여기서 해당 체크박스의 상태에 따라 스타일을 변경합니다.
 const getLabelStyle = (name) => {
  return {
    ...labelStyle,
    backgroundColor: stfCheckboxes[name] ? "#EE833E" : "white",
  };
};

  return (
    <div style={checkboxContainer}>
      <label style={getLabelStyle("stfcheckbox1")} id="stflbl1">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox1}
          onChange={() => handleCheckboxChange("stfcheckbox1", 11)}
          value={11}
          id="stfcheckbox1"
        />
        <p style={pStyle}>PM </p>
      </label>
      <label style={getLabelStyle("stfcheckbox2")} id="stflbl2">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox2}
          onChange={() => handleCheckboxChange("stfcheckbox2", 12)}
          value={12}
          id="stfcheckbox2"
        />
        <p style={pStyle}>기획자</p>
      </label>
      <label style={getLabelStyle("stfcheckbox3")} id="stflbl3">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox3}
          onChange={() => handleCheckboxChange("stfcheckbox3", 13)}
          value={13}
          id="stfcheckbox3"
        />
        <p style={pStyle}>디자이너</p>
      </label>
      <label style={getLabelStyle("stfcheckbox4")} id="stflbl4">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox4}
          onChange={() => handleCheckboxChange("stfcheckbox4", 14)}
          value={14}
          id="stfcheckbox4"
        />
        <p style={pStyle}>프론트 개발자</p>
      </label>
      <label style={getLabelStyle("stfcheckbox5")} id="stflbl5">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox5}
          onChange={() => handleCheckboxChange("stfcheckbox5", 15)}
          value={15}
          id="stfcheckbox5"
        />
        <p style={pStyle}>백엔드 개발자</p>
      </label>
      <label style={getLabelStyle("stfcheckbox6")} id="stflbl6">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox6}
          onChange={() => handleCheckboxChange("stfcheckbox6", 16)}
          value={16}
          id="stfcheckbox6"
        />
        <p style={pStyle}>모바일 개발자</p>
      </label>
      <label style={getLabelStyle("stfcheckbox7")} id="stflbl7">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox7}
          onChange={() => handleCheckboxChange("stfcheckbox7", 17)}
          value={17}
          id="stfcheckbox7"
        />
        <p style={pStyle}>게임 개발자</p>
      </label>
      <label style={getLabelStyle("stfcheckbox8")} id="stflbl8">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox8}
          onChange={() => handleCheckboxChange("stfcheckbox8", 18)}
          value={18}
          id="stfcheckbox8"
        />
        <p style={pStyle}>
          데이터 <br />
          사이언티스트
        </p>
      </label>
      <label style={getLabelStyle("stfcheckbox9")} id="stflbl9">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox9}
          onChange={() => handleCheckboxChange("stfcheckbox9", 19)}
          value={19}
          id="stfcheckbox9"
        />
        <p style={pStyle}>빅데이터 개발자</p>
      </label>
      <label style={getLabelStyle("stfcheckbox10")} id="stflbl10">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox10}
          onChange={() => handleCheckboxChange("stfcheckbox10", 20)}
          value={20}
          id="stfcheckbox10"
        />
        <p style={pStyle}>
          소프트웨어 <br /> 엔지니어
        </p>
      </label>
    </div>
  );
}

export default StaffCheckbox;
