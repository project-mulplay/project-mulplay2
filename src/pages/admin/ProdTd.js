import React, { useState } from "react";
import { Button, Modal } from "antd";

const trstyle = {
  backgroundColor: "#fff",
  border: "1px solid #888",
};

const tdstyle = {
  padding: "8px",
  border: "1px solid #888",
  textAlign: "left",
};

const accstyle = {
  width: "60px",
  height: "30px",
  backgroundColor: "#EE833E",
  color: "#fff",
  fontSize: "14px",
  cursor: "pointer",
  boxShadow: "none",
  padding: "0",
};

const rejstyle = {
  width: "60px",
  height: "20px",
  backgroundColor: "#fff",
  border: "1px solid #555",
  color: "#333",
  fontSize: "12px",
  cursor: "pointer",
};

const ProdTd = ({ item, handleRemove }) => {
  // const accept = () => {
  //   handleAccept(item);
  // };
  const reject = () => {
    handleRemove(item.prod_no);
  };

  return (
    <>
      <tr style={trstyle}>
        <td style={tdstyle}>{item.prod_no}</td>
        <td style={tdstyle}>{item.prod_title}</td>
        <td style={tdstyle}>{item.user_no}</td>
        <td style={tdstyle}>{item.prod_opendate}</td>
        <td style={tdstyle}>{item.prod_enddate}</td>
        <td style={tdstyle}>{item.prod_goal}</td>
        <td style={accstyle}>
          <AcceptModal />
        </td>
        <td onClick={reject} style={rejstyle}>
          거절
        </td>
      </tr>
    </>
  );
};

const AcceptModal = () => {
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
      <Button type="primary" onClick={showModal} style={accstyle}>
        승인
      </Button>
      <Modal
        title="승인 완료"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>프로젝트가 승인되었습니다.</p>
      </Modal>
    </>
  );
};

export default ProdTd;
