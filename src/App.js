import "./App.css";

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';

import { LoggedOutHeader, LoggedInHeader } from "./components/head/Header";
import Footer from "./components/footer/Footer";
import MyInfoEdit from "./pages/mypages/MyInfoEdit";
import MyProjectManage from "./pages/mypages/MyProjectManage";
import Project from "./pages/myproject/Project";
import Cart from "./pages/cart/Cart";
import Funding from "./pages/funding/Funding";
import FundingListPage from "./pages/fundinglist/FundingListPage";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import NotFound from "./pages/NotFound";
import MyPages from "./pages/mypages/MyPages";
import MyFundingProject from "./pages/mypages/MyFundingProject";
import MyLikeProject from "./pages/mypages/MyLikeProject";
import MyProceeds from "./pages/mypages/MyProceeds";
import MyPwEdit from "./pages/mypages/MyPwEdit";
import AdminPage from "./pages/admin/AdminPage";
import Guidepage from "./pages/guidepages/guidepage";
import OpenFundingList from "./pages/fundinglist/OpenFundingList";

function App() {

  const [cookies] = useCookies(['token']);

  useEffect(() => {
    if (cookies.token) {
      // 토큰이 존재하면, 로그인 상태라고 간주
      console.log('사용자는 로그인 상태입니다.');
      console.log(cookies.token);
      // 여기에서 다른 로그인 관련 동작 수행 가능
    } else {
      console.log('사용자는 로그아웃 상태입니다.');
    }
  }, [cookies.token]);

  return (
    <div className="App">
      {cookies.token ? <LoggedInHeader /> : <LoggedOutHeader />}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/funding" element={<Funding />}></Route>
        <Route path="/openfundinglist" element={<OpenFundingList />}></Route>
        <Route path="/fundinglist" element={<FundingListPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mypages" element={<MyPages />}>
          <Route path="myinfoedit" element={<MyInfoEdit />} />
          <Route path="mypwedit" element={<MyPwEdit />} />
          <Route path="myprojectmanage" element={<MyProjectManage />}></Route>
          <Route path="myfundingproject" element={<MyFundingProject />} />
          <Route path="mylikeproject" element={<MyLikeProject />} />
          <Route path="myproceeds" element={<MyProceeds />} />
        </Route>
        <Route path="/guide" element={<Guidepage />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/adminpage" element={<AdminPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
