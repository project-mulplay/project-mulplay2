import "./Signup.css";
import { useState, useEffect } from "react";
import GoogleIcon from "./../../assets/image/icon_google.svg";
import KakaoIcon from "./../../assets/image/icon_kakaotalk.svg";
import AppleIcon from "./../../assets/image/icon_apple.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [mailDetail, setMailDetail] = useState("선택하기");
  const [mailTotal, setMailTotal] = useState("");
  const [post, setPost] = useState("");
  const [adr, setAdr] = useState("");
  const [adrDetail, setAdrDetail] = useState("");
  const [adrTotal, setAdrTotal] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onChangeCheckPw = (e) => {
    setCheckPw(e.target.value);
  };
  const onChangeTel = (e) => {
    setTel(e.target.value);
  };
  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  const onChangeMailDetail = (e) => {
    setMailDetail(e.target.value);
  };
  const onChangeAdr = (e) => {
    setAdr(e.target.value);
  };
  const onChangeAdrDetail = (e) => {
    setAdrDetail(e.target.value);
  };

  useEffect(() => {
    let all = {
      name,
      id,
      pw,
      tel,
      mailTotal,
      post,
      adrTotal,
    };
    console.log(all);
  }, [name, id, pw, tel, mail, adr]);

  useEffect(() => {
    setMailTotal(mail + "@" + mailDetail);
  }, [mail, mailDetail]);

  useEffect(() => {
    setAdrTotal(adr + "/" + adrDetail);
  }, [adr, adrDetail]);

  return (
    <section id="container_signup">
      <h1>회원가입</h1>
      <form action="#" className="form_signup">
        <div className="input_box name">
          <label>이름</label>
          <input
            value={name}
            className="input_text"
            type="text"
            placeholder="이름을 입력해 주세요"
            required
            onChange={(e) => {
              onChangeName(e);
            }}
          />
        </div>
        <div className="input_box id">
          <label>아이디</label>
          <input
            value={id}
            className="input_text"
            type="text"
            placeholder="아이디(이메일)를 입력해 주세요"
            required
            onChange={(e) => {
              onChangeId(e);
            }}
          />
        </div>
        <div className="input_box pw">
          <label>비밀번호</label>
          <input
            value={pw}
            className="input_text"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            required
            onChange={(e) => {
              onChangePw(e);
            }}
          />
        </div>
        <div className="input_box check_pw">
          <label>비밀번호 확인</label>
          <input
            value={checkPw}
            className="input_text"
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요"
            required
            onChange={(e) => {
              onChangeCheckPw(e);
            }}
          />
        </div>
        <div className="input_box tel">
          <label>전화번호</label>
          <input
            value={tel}
            className="input_text"
            type="text"
            placeholder="전화번호를 입력해 주세요"
            required
            onChange={(e) => {
              onChangeTel(e);
            }}
          />
        </div>
        {/* <div className="input_box email">
          <label>이메일</label>
          <div className="column">
            <input
              value={mail}
              className="input_text"
              type="text"
              placeholder="이메일을 입력해 주세요"
              required
              onChange={(e) => {
                onChangeMail(e);
              }}
            />
            <div className="email_golbang">@</div>
            <div className="select_box">
              <select
                className="input_select"
                value={mailDetail}
                onChange={(e) => {
                  onChangeMailDetail(e);
                }}
              >
                <option hidden>선택하기</option>
                <option>naver.com</option>
                <option>google.com</option>
                <option>hanmail.net</option>
                <option>hatmail.com</option>
              </select>
            </div>
          </div>
        </div> */}
        <div className="input_box adr">
          <label>주소</label>
          <div className="column">
            <input
              value={post}
              type="text"
              className="input_text"
              placeholder="우편번호"
              required
              disabled
            />

            <button className="btn_search" type="button">
              검색
            </button>
          </div>
        </div>
        <div className="input_box">
          <input
            value={adr}
            className="input_text"
            type="text"
            placeholder="우편번호를 검색하세요"
            required
            disabled
          />
        </div>
        <div className="input_box">
          <input
            value={adrDetail}
            className="input_text"
            type="text"
            placeholder="상세주소를 입력해 주세요"
            required
            onChange={(e) => {
              onChangeAdrDetail(e);
            }}
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

        <button className="btn_signup">완료</button>
      </form>
    </section>
  );
};

export default Signup;
