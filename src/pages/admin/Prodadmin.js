import React, { useEffect, useState, useRef } from "react";
import projectData from "../../data/projectData.json";

//import axios from "axios";
import "./Prodadmin.css";
import Tr from "./Tr";

const Prodadmin = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // 데이터를 가져와서 상태에 설정
    setInfo(projectData);
  }, []);

  //고유값으로 사용될 id
  //ref 를 사용하여 변수 담기
  //const nextId = useRef(11);

  // 수락하기
  //const accept = (data) => {};
  // 거절하기
  const handleRemove = (prod_no) => {
    setInfo((info) => info.filter((item) => item.prod_no !== prod_no));
  };

  return (
    <div className="admin_container">
      <div className="admin_list">프로젝트 관리</div>
      <table className="admin_table">
        <thead className="table_top">
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>이메일</th>
            <th>시작일</th>
            <th>종료일</th>
            <th>목표 금액</th>
            <th>관리</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} />
      </table>
    </div>
  );
};

export default Prodadmin;
