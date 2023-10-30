import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import MyTable from "../../components/layout/mypage/MyTable";
import "./MyProceeds.css";

const MyProceeds = () => {
  const [data, setData] = useState([]);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/myproceeds", {
        params: {
          user_no: cookies.token,
        },
      })
      .then((response) => {
        // 요청 성공 시 실행할 코드
        setData(response.data);

        console.log("myproceeds 요청 성공:", response);
      })
      .catch((error) => {
        // 에러 처리
        console.error("요청 실패:", error);
      });
  }, []);

  return (
    <div className="myProceeds">
      <MyTable data={data} />
    </div>
  );
};

export default MyProceeds;
