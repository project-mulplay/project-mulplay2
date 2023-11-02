import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/image/logo.png";
import menu from "../../assets/image/menu.png";
import close from "../../assets/image/close.png";
import search from "../../assets/image/search.png";
//import bell from "../../assets/image/bell.png";

// 로그인 안한 헤더
const LoggedOutHeader = ({ onLoginClick }) => {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  // 윈도우 사이즈 변경 시 메뉴를 닫음
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {/* 배경을 어둡게 처리하기 위한 .menu_shadow */}
      {isOpen && <div className="menu_shadow" onClick={toggleMenu}></div>}
    </header>
  );
};

// 로그인 상태 헤더
const LoggedInHeader = ({ onLogoutClick }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token"); // 토큰 쿠키를 삭제하여 로그아웃 상태로 변경
    alert("로그아웃 되었습니다");
  };
  console.log(cookies.token);

  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen); // on,off 개념 boolean
  };

  // 윈도우 사이즈 변경 시 메뉴를 닫음
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              <button onClick={handleLogout}>로그아웃</button>
              {cookies.token === 1 ? (
                <Link to="/adminpage">
                  <button>관리자페이지</button>
                </Link>
              ) : (
                <Link to="/mypages/myinfoedit">
                  <button>마이페이지</button>
                </Link>
              )}
            </div>
          </ul>
        </nav>
        <Link to="/guide">
          <button className="btn">프로젝트 만들기</button>
        </Link>
      </div>

      {/* 배경을 어둡게 처리하기 위한 .menu_shadow */}
      {isOpen && <div className="menu_shadow" onClick={toggleMenu}></div>}
    </header>
  );
};

export { LoggedOutHeader, LoggedInHeader };
