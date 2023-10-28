import React, { useState, useEffect } from "react";

function StaffCheckbox() {
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
  const [stfcheckbox1, setStfCheckbox1] = useState(false);
  const [stfcheckbox2, setStfCheckbox2] = useState(false);
  const [stfcheckbox3, setStfCheckbox3] = useState(false);
  const [stfcheckbox4, setStfCheckbox4] = useState(false);
  const [stfcheckbox5, setStfCheckbox5] = useState(false);
  const [stfcheckbox6, setStfCheckbox6] = useState(false);
  const [stfcheckbox7, setStfCheckbox7] = useState(false);
  const [stfcheckbox8, setStfCheckbox8] = useState(false);
  const [stfcheckbox9, setStfCheckbox9] = useState(false);
  const [stfcheckbox10, setStfCheckbox10] = useState(false);

  const handleCheckboxChange = (name) => {
    setStfCheckboxes({
      ...stfCheckboxes,
      [name]: !stfCheckboxes[name],
    });
  };

  useEffect(() => {
    if (stfcheckbox1) {
      document.getElementById("stflbl1").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl1").style.backgroundColor = "white";
    }

    if (stfcheckbox2) {
      document.getElementById("stflbl2").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl2").style.backgroundColor = "white";
    }

    if (stfcheckbox3) {
      document.getElementById("stflbl3").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl3").style.backgroundColor = "white";
    }

    if (stfcheckbox4) {
      document.getElementById("stflbl4").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl4").style.backgroundColor = "white";
    }

    if (stfcheckbox5) {
      document.getElementById("stflbl5").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl5").style.backgroundColor = "white";
    }

    if (stfcheckbox6) {
      document.getElementById("stflbl6").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl6").style.backgroundColor = "white";
    }

    if (stfcheckbox7) {
      document.getElementById("stflbl7").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl7").style.backgroundColor = "white";
    }

    if (stfcheckbox8) {
      document.getElementById("stflbl8").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl8").style.backgroundColor = "white";
    }

    if (stfcheckbox9) {
      document.getElementById("stflbl9").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl9").style.backgroundColor = "white";
    }

    if (stfcheckbox10) {
      document.getElementById("stflbl10").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("stflbl10").style.backgroundColor = "white";
    }
  }, [
    stfcheckbox1,
    stfcheckbox2,
    stfcheckbox3,
    stfcheckbox4,
    stfcheckbox5,
    stfcheckbox6,
    stfcheckbox7,
    stfcheckbox8,
    stfcheckbox9,
    stfcheckbox10,
  ]);
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

  return (
    <div style={checkboxContainer}>
      <label style={labelStyle} id="stflbl1">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox1}
          onChange={() => setStfCheckbox1(!stfcheckbox1)}
          id="stfcheckbox1"
        />
        <p style={pStyle}>PM </p>
      </label>
      <label style={labelStyle} id="stflbl2">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox2}
          onChange={() => setStfCheckbox2(!stfcheckbox2)}
          id="stfcheckbox2"
        />
        <p style={pStyle}>기획자</p>
      </label>
      <label style={labelStyle} id="stflbl3">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox3}
          onChange={() => setStfCheckbox3(!stfcheckbox3)}
          id="stfcheckbox3"
        />
        <p style={pStyle}>디자이너</p>
      </label>
      <label style={labelStyle} id="stflbl4">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox4}
          onChange={() => setStfCheckbox4(!stfcheckbox4)}
          id="stfcheckbox4"
        />
        <p style={pStyle}>프론트 개발자</p>
      </label>
      <label style={labelStyle} id="stflbl5">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox5}
          onChange={() => setStfCheckbox5(!stfcheckbox5)}
          id="stfcheckbox5"
        />
        <p style={pStyle}>백엔드 개발자</p>
      </label>
      <label style={labelStyle} id="stflbl6">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox6}
          onChange={() => setStfCheckbox6(!stfcheckbox6)}
          id="stfcheckbox6"
        />
        <p style={pStyle}>모바일 개발자</p>
      </label>
      <label style={labelStyle} id="stflbl7">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox7}
          onChange={() => setStfCheckbox7(!stfcheckbox7)}
          id="stfcheckbox7"
        />
        <p style={pStyle}>게임 개발자</p>
      </label>
      <label style={labelStyle} id="stflbl8">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox8}
          onChange={() => setStfCheckbox8(!stfcheckbox8)}
          id="stfcheckbox8"
        />
        <p style={pStyle}>
          데이터 <br />
          사이언티스트
        </p>
      </label>
      <label style={labelStyle} id="stflbl9">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox9}
          onChange={() => setStfCheckbox9(!stfcheckbox9)}
          id="stfcheckbox9"
        />
        <p style={pStyle}>빅데이터 개발자</p>
      </label>
      <label style={labelStyle} id="stflbl10">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={stfCheckboxes.stfcheckbox10}
          onChange={() => setStfCheckbox10(!stfcheckbox10)}
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
