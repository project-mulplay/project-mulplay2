import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/image/logo.png";
import menu from "../../assets/image/menu.png";
//import user from "../../assets/image/user_menu.png";
import close from "../../assets/image/close.png";
import search from "../../assets/image/search.png";
//import bell from "../../assets/image/bell.png";

// 로그인 안한 헤더
const LoggedOutHeader = ({ onLoginClick }) => {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  return (
    <header className="header">
      <div className="contents">
        <Link to="/">
          <img className="logo" src={logo} alt="로고" />
        </Link>

        {/* 햄버거 버튼  */}
        <div className="menu_toggle" onClick={() => toggleMenu()}>
          <img className="menu" src={!isOpen ? menu : close} alt="메뉴" />
        </div>

        {/* 메뉴리스트 */}

        <nav className={isOpen ? "show-menu" : "hide-menu"}>
          <ul>
            <li>
              <Link to="/openfundinglist">오픈예정 </Link>
            </li>
            <li>
              <Link to="/fundinglist">인기펀딩 </Link>
            </li>
            <li>
              <Link to="/fundinglist">신규펀딩 </Link>
            </li>

            <div className="search-bar">
              <input type="text" placeholder="프로젝트명을 검색해보세요" />
              <img className="search" src={search} alt="검색" />
            </div>

            <div className="login">
              <Link to="/login">
                <button>로그인</button>
              </Link>
              <Link to="/signup">
                <button>회원가입</button>
              </Link>
            </div>
          </ul>
        </nav>

        <Link to="/guide">
          <button className="btn">프로젝트 만들기</button>
        </Link>
      </div>
    </header>
  );
};

// 로그인 상태 헤더
const LoggedInHeader = ({ onLogoutClick }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token"); // 토큰 쿠키를 삭제하여 로그아웃 상태로 변경
  };

  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  return (
    <header className="header">
      <div className="contents">
        <Link to="/">
          <img className="logo" src={logo} alt="로고" />
        </Link>

        {/* 햄버거 버튼  */}
        <div className="menu_toggle" onClick={() => toggleMenu()}>
          <img className="menu" src={!isOpen ? menu : close} alt="메뉴" />
        </div>

        {/* 메뉴리스트 */}
        <nav className={isOpen ? "show-menu" : "hide-menu"}>
          <ul>
            <li>
              <Link to="/openfundinglist">오픈예정 </Link>
            </li>
            <li>
              <Link to="/fundinglist">인기펀딩 </Link>
            </li>
            <li>
              <Link to="/fundinglist">신규펀딩 </Link>
            </li>

            <div className="search-bar">
              <input type="text" placeholder="프로젝트명을 검색해보세요" />
              <img className="search" src={search} alt="검색" />
            </div>

            <div className="login">
              {/* <img className="alarm" src={bell} alt="알림" /> */}
              <Link to="/">
                <button onClick={handleLogout}>로그아웃</button>
              </Link>
              <Link to="/mypages/myinfoedit">
                <button>마이페이지</button>
              </Link>
            </div>
          </ul>
        </nav>
        <Link to="/guide">
          <button className="btn">프로젝트 만들기</button>
        </Link>
      </div>
    </header>
  );
};

export { LoggedOutHeader, LoggedInHeader };
