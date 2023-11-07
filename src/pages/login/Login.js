import "./Login.css";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";
import axios from "axios";

import Swal from "sweetalert2";

const Login = () => {
  const [data, setData] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies();
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
      setCookie("token", ""); // 쿠키에 토큰 저장
      setCookie("token", response.data.user_no, { sameSite: "strict" }); // 쿠키에 토큰 저장

      console.log(response.data.user_id, response.data.user_pw);
      console.log("요청 성공:", response);
      console.log("쿠키:", cookies.token);

      // 아이디와 비밀번호 비교
      if (
        response.data.user_id === username &&
        response.data.user_pw === password
      ) {
        if (response.data.user_stat === 0) {
          console.log("유저상태" + response.data.user_stat);
          Swal.fire({
            icon: "info",
            title: "탈퇴한 회원입니다.",
            showCancelButton: false,
            confirmButtonColor: "#EE833E",
            confirmButtonText: "OK",
          });

          window.location.href = "/";
          removeCookie("token");
        } else {
          Swal.fire({
            icon: "success",
            title: "로그인 되었습니다.",
            text: "MULPLAY에 오신걸 환영합니다.",
            showCancelButton: false,
            confirmButtonColor: "#EE833E",
            confirmButtonText: "OK",
          });
        }

        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "아이디 또는 비밀번호가 일치하지 않습니다.",
          text: "다시 확인해주세요.",
          showCancelButton: false,
          confirmButtonColor: "#EE833E",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("요청 실패:", error);
    }
  };

  // 미완성된 기능 알람
  const onClick = () => {
    alert("아직 미구현된 기능입니다.");
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
        {/* 아이디 저장, 아이디 찾기 주석처리 */}
        {/* <div className="container_savefind">
          <div className="save_box">
            <input type="checkbox" className="chk_btn" id="chk_save"/>
            <label for="chk_save" className="title">아이디 저장</label>
          </div>

          <div className="find_box">
            <a className="atag" href="#" onClick={onClick}>
              아이디 / 비밀번호 찾기
            </a>
          </div>
        </div> */}
        <button type="submit" className="btn_login">
          로그인
        </button>

        <div className="signup_btn">
          <span>아직 계정이 없으신가요? </span>
          <Link to="/signup">
            <span className="atag" href="#">
              회원가입
            </span>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
