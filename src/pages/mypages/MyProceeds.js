import React, { useEffect, useState } from "react";
import axios from "axios";

import MyTable from "../../components/layout/mypage/MyTable";
import "./MyProceeds.css";
import paymentData from "../../data/paymentData.json";

const MyProceeds = () => {
  const [data, setData] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(1); // 사용자 아이디 초기화

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/myproceeds", {
        params: {
          user_no: loggedInUserId,
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
  }, [loggedInUserId]);

  return (
    <div className="myProceeds">
      <MyTable data={data} />
    </div>
  );
};

export default MyProceeds;
