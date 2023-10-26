import "./MyProfile.css";
import profile from "../../../assets/image/profile.png";
import axios from "axios";
import { useEffect, useState } from "react";

const MyProfile = ({ user_no }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/profile", {
        params: {
          user_no: 1,
        },
      })
      .then((response) => {
        // 요청 성공 시 실행할 코드
        setData(response.data);
        console.log("요청 성공:", response);
      })
      .catch((error) => {
        // 에러 처리
        console.error("요청 실패:", error);
      });
  }, []);

  return (
    <div className="myprofile" key={user_no}>
      <img className="profileImg" src={profile} alt="profile_img"></img>
      <div className="profileText">
        <div className="userName">{data.user_name}</div>
        <div className="easyLogin">
          {data.user_sns ? "SNS 연동 계정" : "멀플레이 회원"}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
