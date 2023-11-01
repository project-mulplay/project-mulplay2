import "./MyProfile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { ProfileImgAtom } from "../../../recoil/ProfileImgAtom";

const MyProfile = ({ user_no }) => {
  const [cookies, setCookie] = useCookies();
  const [data, setData] = useState({});
  const profileImg = useRecoilValue(ProfileImgAtom);

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/profile", {
        params: {
          user_no: cookies.token,
        },
      })
      .then((response) => {
        // 요청 성공 시 실행할 코드
        setData(response.data);
        console.log("profile 요청 성공:", response);
      })
      .catch((error) => {
        // 에러 처리
        console.error("요청 실패:", error);
      });
  }, []);

  console.log("img", data.user_profileimg);
  return (
    <div className="myprofile" key={user_no}>
      <img className="profileImg" src={profileImg} alt="profile_img"></img>
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
