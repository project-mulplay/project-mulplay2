import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/image/logo.png";
import search from "../../assets/image/search.png";

const LoggedOutHeader = ({ onLoginClick }) => {
  return (
    <header className="header">
      <div className="contents">
        <Link to="/">
          <img className="logo" src={logo} alt="로고" />
        </Link>
        <nav className="navigation">
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
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="프로젝트명을 검색해보세요" />
          <img className="search" src={search} alt="검색" />
        </div>
        <div className="login">
          <Link to="/login">
            <button onClick={onLoginClick}>로그인</button>
          </Link>
          <Link to="/signup">
            <button onClick={onLoginClick}>회원가입</button>
          </Link>
        </div>
        <Link to="/guide">
          <button className="btn">프로젝트 만들기</button>
        </Link>
      </div>
    </header>
  );
};
const LoggedInHeader = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token"); // 토큰 쿠키를 삭제하여 로그아웃 상태로 변경
  };
  return (
    <header className="header">
      <div className="contents">
        <Link to="/">
          <img className="logo" src={logo} alt="로고" />
        </Link>
        <nav className="navigation">
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
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="프로젝트명을 검색해보세요" />
          <img className="search" src={search} alt="검색" />
        </div>
        <div className="login">
          <button onClick={handleLogout}>로그아웃</button>
          <Link to="/mypages/myinfoedit">
            <button>마이페이지</button>
          </Link>
        </div>
        <Link to="/guide">
          <button className="btn">프로젝트 만들기</button>
        </Link>
      </div>
    </header>
  );
};

export { LoggedOutHeader, LoggedInHeader };
