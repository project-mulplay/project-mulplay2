import React, { useState, useEffect } from "react";

function SkillCheckbox({ onChange }) {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
  });

  // 체크박스 상태 변경 함수
 const handleCheckboxChange = (name, value) => {
  setCheckboxes((prevCheckboxes) => {
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
    backgroundColor: checkboxes[name] ? "#EE833E" : "white",
  };
};

  return (
    <div style={checkboxContainer}>
      <label style={getLabelStyle("checkbox1")} id="lbl1">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox1}
          onChange={() => handleCheckboxChange('checkbox1', 21)}
          id="checkbox1"
          value={21}
        />
        <p style={pStyle}>Java </p>
      </label>
      <label style={getLabelStyle("checkbox2")} id="lbl2">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox2}
          onChange={() => handleCheckboxChange('checkbox2', 22)}
          id="checkbox2"
          value={22}
        />
        <p style={pStyle}>Linux</p>
      </label>
      <label style={getLabelStyle("checkbox3")} id="lbl3">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox3}
          onChange={() => handleCheckboxChange('checkbox3', 23)}
          id="checkbox3"
          value={23}
        />
        <p style={pStyle}>Android</p>
      </label>
      <label style={getLabelStyle("checkbox4")} id="lbl4">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox4}
          onChange={() => handleCheckboxChange('checkbox4', 24)}
          id="checkbox4"
          value={24}
        />
        <p style={pStyle}>IOS</p>
      </label>
      <label style={getLabelStyle("checkbox5")} id="lbl5">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox5}
          onChange={() => handleCheckboxChange('checkbox5', 25)}
          id="checkbox5"
          value={25}
        />
        <p style={pStyle}>PHP</p>
      </label>
      <label style={getLabelStyle("checkbox6")} id="lbl6">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox6}
          onChange={() => handleCheckboxChange('checkbox6', 26)}
          id="checkbox6"
          value={26}
        />
        <p style={pStyle}>Spring</p>
      </label>
      <label style={getLabelStyle("checkbox7")} id="lbl7">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox7}
          onChange={() => handleCheckboxChange('checkbox7', 27)}
          id="checkbox7"
          value={27}
        />
        <p style={pStyle}>mariadb</p>
      </label>
      <label style={getLabelStyle("checkbox8")} id="lbl8">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox8}
          onChange={() => handleCheckboxChange('checkbox8', 28)}
          id="checkbox8"
          value={28}
        />
        <p style={pStyle}>react.js</p>
      </label>
      <label style={getLabelStyle("checkbox9")} id="lbl9">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox9}
          onChange={() => handleCheckboxChange('checkbox9', 29)}
          id="checkbox9"
          value={29}
        />
        <p style={pStyle}>next.js</p>
      </label>
      <label style={getLabelStyle("checkbox10")} id="lbl10">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={checkboxes.checkbox10}
          onChange={() => handleCheckboxChange('checkbox10', 30)}
          id="checkbox10"
          value={30}
        />
        <p style={pStyle}>typescript</p>
      </label>
    </div>
  );
}

export default SkillCheckbox;
