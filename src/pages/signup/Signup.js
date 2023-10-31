import "./Signup.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "./../../assets/image/icon_google.svg";
import KakaoIcon from "./../../assets/image/icon_kakaotalk.svg";
import AppleIcon from "./../../assets/image/icon_apple.svg";

const Signup = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
  const navigate = useNavigate();

  const [data, setData] = useState({
    user_id: "",
    user_pw: "",
    user_name: "",
    user_phone: "",
    user_address: "",
    user_regdate: formattedDate,
    user_sns: 0,
    user_role: 1,
    img_no: 1,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3300/register/signup",
        data
      );
      console.log("요청 성공:", response);
      alert("회원가입이 완료되었습니다. 로그인페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      console.log(data);
      console.error("요청 실패:", error);
    }
  };

  return (
    <section id="container_signup">
      <h1>회원가입</h1>
      <form action="#" className="form_signup">
        <div className="input_box id">
          <label>아이디</label>
          <input
            className="input_text"
            type="text"
            placeholder="이메일 형식으로 입력해 주세요"
            required
            name="user_id"
            onChange={handleChange}
          />
        </div>
        <div className="input_box pw">
          <label>비밀번호</label>
          <input
            className="input_text"
            type="text"
            placeholder="비밀번호를 입력해 주세요"
            required
            name="user_pw"
            onChange={handleChange}
          />
        </div>
        <div className="input_box name">
          <label>이름</label>
          <input
            name="user_name"
            className="input_text"
            type="text"
            placeholder="이름을 입력해 주세요"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input_box tel">
          <label>전화번호</label>
          <input
            className="input_text"
            type="text"
            placeholder="전화번호를 입력해 주세요"
            required
            name="user_phone"
            onChange={handleChange}
          />
        </div>
        <div className="input_box adr">
          <label>주소</label>
          <div className="column">
            <input
              type="text"
              className="input_text"
              placeholder="우편번호"
              required
              name="user_address"
              onChange={handleChange}
            />

            <button className="btn_search">검색</button>
          </div>
        </div>
        <div className="input_box">
          <input
            className="input_text"
            type="text"
            placeholder="상세주소를 입력해 주세요"
            required
          />
        </div>

        <div className="agreement__container">
          <ul className="agreement__all">
            <li className="check_all">
              <input type="checkbox" className="chk_btn" id="chk_all" />
              <label className="title" htmlFor="chk_all">
                전체 동의
              </label>
              <i></i>
            </li>
            <li>
              <ul className="agreement__each">
                <li>
                  <input type="checkbox" className="chk_btn" id="chk_01" />
                  <label htmlFor="chk_01">선택 동의 01</label>
                  <a href="#" className="more_btn">
                    전문 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" className="chk_btn" id="chk_02" />
                  <label htmlFor="chk_02">선택 동의 02</label>
                  <a href="#" className="more_btn">
                    전문 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" className="chk_btn" id="chk_03" />
                  <label htmlFor="chk_03">선택 동의 03</label>
                  <a href="#" className="more_btn">
                    전문 보기
                  </a>
                </li>
                <li>
                  <input type="checkbox" className="chk_btn" id="chk_04" />
                  <label htmlFor="chk_04">선택 동의 04</label>
                  <a href="#" className="more_btn">
                    전문 보기
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <button type="submit" className="btn_signup" onClick={handleSubmit}>
          완료
        </button>
      </form>
    </section>
  );
};

export default Signup;
