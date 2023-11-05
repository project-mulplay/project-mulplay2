import React, { useState } from "react";
import { Button, Modal } from "antd";
import Userlist from "./Modal";

const trstyle = {
  backgroundColor: "#fff",
  border: "1px solid #888",
};

const tdstyle = {
  padding: "10px",
  border: "1px solid #888",
  textAlign: "left",
};

const viewstyle = {
  width: "60px",
  height: "30px",
  backgroundColor: "#EE833E",
  color: "#fff",
  fontSize: "14px",
  cursor: "pointer",
  boxShadow: "none",
  padding: "0",
};

const UserTd = ({ item }) => {
  return (
    <>
      <tr style={trstyle}>
        <td style={tdstyle}>{item.user_no}</td>
        <td style={tdstyle}>{item.user_id}</td>
        <td style={tdstyle}>{item.user_name}</td>
        <td style={tdstyle}>{item.user_phone}</td>
        <td style={tdstyle}>{item.user_regdate}</td>
        <td style={viewstyle}>
          <Modalopen />
        </td>
      </tr>
    </>
  );
};

const Modalopen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} style={viewstyle}>
        보기
      </Button>
      <Modal
        title="사용자 정보"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Userlist />
      </Modal>
    </>
  );
};

export default UserTd;
