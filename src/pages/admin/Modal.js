import React, { useState } from "react";
import "./Modal.css";
import userData from "../../data/userData.json";

const Userlist = () => {
  return (
    // <div className="usercontainer">
    //   <div className="usercontent">
    //     <div className="modaltop">
    //       <h3 className="modaltitle">사용자 정보 조회</h3>
    //       <svg
    //         className="modalclose"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //         onClick={onCancel}
    //       >
    //         <path
    //           d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
    //           fill="#777777"
    //         />
    //       </svg>
    //     </div>
    // <form>
    <div>
      <div>No: {userData[0].user_no}</div>
      <div>아이디: {userData[0].user_id}</div>
      <div>비밀번호: {userData[0].user_pw}</div>
      <div>이름: {userData[0].user_name}</div>
      <div>전화번호: {userData[0].user_phone}</div>
      <div>자택주소: {userData[0].user_address}</div>
      <div>등록일: {userData[0].user_regdate}</div>
    </div>
    // </form>
    //</div>
    //</div> */}
  );
};

export default Userlist;
