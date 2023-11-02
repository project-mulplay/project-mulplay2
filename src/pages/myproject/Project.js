// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//import { Routes, Route, useParams } from "react-router-dom";

import NextBtn from "./NextBtn";
import "./Project.css";
import BasicInfo from "./BasicInfo";
import TagInfo from "./TagInfo";
import RewardInfo from "./RewardInfo";
import ProjectInfo from "./ProjectInfo";

const ProjectTitle = () => {
  return (
    <div className="procontainer" sx={{ position: "relative" }}>
      <p className="projectitle"> 프로젝트 작성 </p>
    </div>
  );
};

// 메뉴 탭 //

export function CenteredTabs() {

  const [data, setData] = useState({});
  console.log(data);
  console.log(data.prod_no);

  useEffect(() => {
    axios
      .get("http://localhost:3300/make/infoproject", {
        params: {
          user_no: 1,
        },
      })
      .then((response) => {
        // 요청 성공 시 실행할 코드
        setData(response.data);
        console.log("요청 성공:", response);
        console.log(response.data);
      })
      .catch((error) => {
        // 에러 처리
        console.error("요청 실패:", error);
      });
  }, []);

  //  버튼 스타일
  const btnstyle = {
    margin: "50px 20px",
    backgroundColor: "#EE833E",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
    width: "184px",
    height: "50px",
    borderRadius: "15px",
    border: "none",
    cursor: "pointer",
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const clickbtn = () => {
    console.log("clickbtn");
    if (value === 0) {
      setValue(1);
    }
    if (value === 1) {
      setValue(2);
    }
    if (value === 2) {
      setValue(3);
    }
    if (value === 3) {
      // 페이지를 홈페이지 메인으로 이동
      window.location.href = "/"; // 또는 원하는 경로로 설정
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "absolute",
        top: 270,
        left: 0,
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab sx={{ fontSize: 18, fontWeight: 600 }} label="기본 정보" />
        <Tab sx={{ fontSize: 18, fontWeight: 600 }} label="해쉬태그 정보" />
        <Tab sx={{ fontSize: 18, fontWeight: 600 }} label="리워드 정보" />
        <Tab sx={{ fontSize: 18, fontWeight: 600 }} label="프로젝트 정보" />
      </Tabs>

      {value === 0 && (
        <Typography sx={{ p: 2 }}>
          <BasicInfo number={data.prod_no}/>
          <button style={btnstyle} value={value} onClick={clickbtn}>
            다음 단계
          </button>
        </Typography>
      )}

      {value === 1 && (
        <Typography sx={{ p: 2 }}>
          <TagInfo number={data.prod_no}/>
          <button style={btnstyle} value={value} onClick={clickbtn}>
            다음 단계
          </button>
        </Typography>
      )}

      {value === 2 && (
        <Typography sx={{ p: 2 }}>
          <RewardInfo number={data.prod_no}/>
          <button style={btnstyle} value={value} onClick={clickbtn}>
            다음 단계
          </button>
        </Typography>
      )}

      {value === 3 && (
        <Typography sx={{ p: 2 }}>
          <ProjectInfo number={data.prod_no}/>
          <button style={btnstyle} value={value} onClick={clickbtn}>
            제출하기
          </button>
        </Typography>
      )}
    </Box>
  );
}

// 메뉴 탭 색깔 테마 //

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
  shape: {
    pillRadius: 10,
  },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    primary: {
      main: "#EE833E",
    },
    secondary: {
      main: "#EE833E",
    },
    error: {
      main: "#009688",
    },
    text: {
      primary: "#EE833E",
      secondary: "#888888",
      disabled: "#4caf50",
      hint: "#ffc107",
      myTextColor: "#039be5",
    },
  },
});

function Project() {
  return (
    <div className="project">
      <ProjectTitle />
      <ThemeProvider theme={theme}>
        <CenteredTabs />
      </ThemeProvider>
      <NextBtn />
    </div>
  );
}

export default Project;
