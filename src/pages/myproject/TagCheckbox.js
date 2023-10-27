import React, { useState, useEffect } from "react";

function TagCheckbox() {
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
  const [tagcheckbox1, settagCheckbox1] = useState(false);
  const [tagcheckbox2, settagCheckbox2] = useState(false);
  const [tagcheckbox3, settagCheckbox3] = useState(false);
  const [tagcheckbox4, settagCheckbox4] = useState(false);
  const [tagcheckbox5, settagCheckbox5] = useState(false);
  const [tagcheckbox6, settagCheckbox6] = useState(false);
  const [tagcheckbox7, settagCheckbox7] = useState(false);
  const [tagcheckbox8, settagCheckbox8] = useState(false);
  const [tagcheckbox9, settagCheckbox9] = useState(false);
  const [tagcheckbox10, settagCheckbox10] = useState(false);

  const handleCheckboxChange = (name) => {
    settagCheckboxes({
      ...tagCheckboxes,
      [name]: !tagCheckboxes[name],
    });
  };

  useEffect(() => {
    if (tagcheckbox1) {
      document.getElementById("taglbl1").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl1").style.backgroundColor = "white";
    }

    if (tagcheckbox2) {
      document.getElementById("taglbl2").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl2").style.backgroundColor = "white";
    }

    if (tagcheckbox3) {
      document.getElementById("taglbl3").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl3").style.backgroundColor = "white";
    }

    if (tagcheckbox4) {
      document.getElementById("taglbl4").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl4").style.backgroundColor = "white";
    }

    if (tagcheckbox5) {
      document.getElementById("taglbl5").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl5").style.backgroundColor = "white";
    }

    if (tagcheckbox6) {
      document.getElementById("taglbl6").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl6").style.backgroundColor = "white";
    }

    if (tagcheckbox7) {
      document.getElementById("taglbl7").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl7").style.backgroundColor = "white";
    }

    if (tagcheckbox8) {
      document.getElementById("taglbl8").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl8").style.backgroundColor = "white";
    }

    if (tagcheckbox9) {
      document.getElementById("taglbl9").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl9").style.backgroundColor = "white";
    }

    if (tagcheckbox10) {
      document.getElementById("taglbl10").style.backgroundColor = "#EE833E";
    } else {
      document.getElementById("taglbl10").style.backgroundColor = "white";
    }
  }, [
    tagcheckbox1,
    tagcheckbox2,
    tagcheckbox3,
    tagcheckbox4,
    tagcheckbox5,
    tagcheckbox6,
    tagcheckbox7,
    tagcheckbox8,
    tagcheckbox9,
    tagcheckbox10,
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
    fontSize: "16px",
    fontWeight: "400",
  };

  const checkboxStyle = {
    display: "none",
  };

  return (
    <div style={checkboxContainer}>
      <label style={labelStyle} id="taglbl1">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox1}
          onChange={() => settagCheckbox1(!tagcheckbox1)}
          id="tagcheckbox1"
        />
        <p style={pStyle}>금융 </p>
      </label>
      <label style={labelStyle} id="taglbl2">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox2}
          onChange={() => settagCheckbox2(!tagcheckbox2)}
          id="tagcheckbox2"
        />
        <p style={pStyle}>교육</p>
      </label>
      <label style={labelStyle} id="taglbl3">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox3}
          onChange={() => settagCheckbox3(!tagcheckbox3)}
          id="tagcheckbox3"
        />
        <p style={pStyle}>여행</p>
      </label>
      <label style={labelStyle} id="taglbl4">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox4}
          onChange={() => settagCheckbox4(!tagcheckbox4)}
          id="tagcheckbox4"
        />
        <p style={pStyle}>건강 </p>
      </label>
      <label style={labelStyle} id="taglbl5">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox5}
          onChange={() => settagCheckbox5(!tagcheckbox5)}
          id="tagcheckbox5"
        />
        <p style={pStyle}>게임</p>
      </label>
      <label style={labelStyle} id="taglbl6">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox6}
          onChange={() => settagCheckbox6(!tagcheckbox6)}
          id="tagcheckbox6"
        />
        <p style={pStyle}>식품</p>
      </label>
      <label style={labelStyle} id="taglbl7">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox7}
          onChange={() => settagCheckbox7(!tagcheckbox7)}
          id="tagcheckbox7"
        />
        <p style={pStyle}>패션</p>
      </label>
      <label style={labelStyle} id="taglbl8">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox8}
          onChange={() => settagCheckbox8(!tagcheckbox8)}
          id="tagcheckbox8"
        />
        <p style={pStyle}>커뮤니티</p>
      </label>
      <label style={labelStyle} id="taglbl9">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox9}
          onChange={() => settagCheckbox9(!tagcheckbox9)}
          id="tagcheckbox9"
        />
        <p style={pStyle}>항공</p>
      </label>
      <label style={labelStyle} id="taglbl10">
        <input
          style={checkboxStyle}
          type="checkbox"
          checked={tagCheckboxes.tagcheckbox10}
          onChange={() => settagCheckbox10(!tagcheckbox10)}
          id="tagcheckbox10"
        />
        <p style={pStyle}>문화</p>
      </label>
    </div>
  );
}

export default TagCheckbox;
