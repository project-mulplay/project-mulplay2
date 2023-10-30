import React, { useEffect, useState, useRef } from "react";
import userData from "../../data/userData.json";

//import axios from "axios";
import "./Prodadmin.css";
import UserTr from "./UserTr";

const Useradmin = () => {
  const [Info, setInfo] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  useEffect(() => {
    // 데이터를 가져와서 상태에 설정
    setInfo(userData);
  }, []);

  // 수락하기
  //const accept = (data) => {};
  // 거절하기
  // const handleRemove = (user_no) => {
  //   setInfo((Info) => Info.filter((item) => item.user_no !== user_no));
  // };
  // 유저 정보 보기
  // const handleModal = (user_no) => {
  //   setModalOn(true); //모달 열기
  // };
  // const handleCancel = () => {
  //   setModalOn(false); //모달 닫기
  // };

  const handleModal = (
    user_no,
    user_id,
    user_name,
    user_phone,
    user_regdate
  ) => {
    setModalOn(true);
    const selectedData = {
      No: user_no,
      Id: user_id,
      Name: user_name,
      Phone: user_phone,
      Reg_date: user_regdate,
    };
    setSelectedData(selectedData);
  };

  return (
    <div className="admin_container">
      <div className="admin_list">사용자 관리</div>
      <table className="admin_table">
        <thead className="table_top">
          <tr>
            <th>No</th>
            <th>아이디</th>
            <th>이름</th>
            <th>전화번호</th>
            <th>등록일</th>
            <th>보기</th>
          </tr>
        </thead>
        <UserTr Info={Info} handleModal={handleModal} />
      </table>
    </div>
  );
};

export default Useradmin;
