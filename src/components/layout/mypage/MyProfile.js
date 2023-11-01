import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ProfileImgAtom } from "../../../recoil/ProfileImgAtom";
import axios from "../../../util/api";

import "./MyProfile.css";

const MyProfile = ({ user_no }) => {
  const [data, setData] = useState({});
  const [userProfile, setUserProfile] = useRecoilState(ProfileImgAtom);

  useEffect(() => {
    axios.get("/user/profile").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="myprofile" key={user_no}>
      <img
        className="profileImg"
        src={require(`../../../assets/image/profile${userProfile}.png`)}
        alt="profile_img"
      ></img>
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
