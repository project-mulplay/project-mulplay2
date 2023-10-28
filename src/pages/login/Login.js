import "./Login.css";
import { useState, useEffect, useContext } from "react";
import GoogleIcon from "./../../assets/image/icon_google.svg";
import KakaoIcon from "./../../assets/image/icon_kakaotalk.svg";
import AppleIcon from "./../../assets/image/icon_apple.svg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3300/signin/login", {
        params: {
          user_id: username,
          user_pw: password,
        },
      });
      setData(response.data);
      console.log(response.data.user_id, response.data.user_pw);
      console.log("요청 성공:", response);


      // 아이디와 비밀번호 비교
    if (response.data.user_id === username && response.data.user_pw === password) {
      alert('로그인되었습니다.');
      navigate('/')
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
    } catch (error) {
      console.error("요청 실패:", error);
    }
  };

  return (
    <section id="container_login">
      <h1>로그인</h1>
      <form action="#" className="form_login" onSubmit={handleSubmit}>
        <div className="input_box id">
          <label>아이디</label>
          <input
            className="input_text"
            type="text"
            placeholder="아이디를 입력해 주세요"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input_box pw">
          <label>비밀번호</label>
          <input
            className="input_text"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="container_savefind">
          <div class="save_box">
            <input type="checkbox" className="chk_btn" id="chk_save" />
            <label class="title" for="chk_save">
              아이디 저장
            </label>
          </div>

          <div className="find_box">
            <a className="atag" href="#">
              아이디 / 비밀번호 찾기
            </a>
          </div>
        </div>
        <button type="submit" className="btn_login">로그인</button>
        {/* sns 로그인 */}
        <div className="sns_container">
          <div className="sns_login google">
            <img src={GoogleIcon} alt="" />
          </div>
          <div className="sns_login kakao">
            <img src={KakaoIcon} alt="" />
          </div>
          <div className="sns_login apple">
            <img src={AppleIcon} alt="" />
          </div>
        </div>
        <div className="signup_btn">
          아직 계정이 없으신가요?{" "}
          <a className="atag" href="#">
            회원가입
          </a>
        </div>
      </form>
    </section>
  );
};

export default Login;