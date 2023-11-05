import React, { useState } from "react";
import { Button, Modal } from "antd";

const trstyle = {
  backgroundColor: "#fff",
  border: "1px solid #888",
};

const tdstyle = {
  padding: "10px",
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
  height: "30px",
  backgroundColor: "#fff",
  boxShadow: "none",
  color: "#333",
  fontSize: "14px",
  cursor: "pointer",
};

const ProdTd = ({ item, setInfo }) => {
  const handleRemove = (prod_no) => {
    setInfo((info) => info.filter((infoItem) => infoItem.prod_no !== prod_no));
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
          <AcceptModal item={item} handleRemove={handleRemove} />
        </td>
        <td style={rejstyle}>
          <RejectModal item={item} handleRemove={handleRemove} />
        </td>
      </tr>
    </>
  );
};

const AcceptModal = ({ item, handleRemove }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAccept = () => {
    handleRemove(item.prod_no);
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
        onOk={handleAccept}
        onCancel={handleCancel}
      >
        <p>프로젝트가 승인되었습니다.</p>
      </Modal>
    </>
  );
};

const RejectModal = ({ item, handleRemove }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleReject = () => {
    handleRemove(item.prod_no);
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} style={rejstyle}>
        거절
      </Button>
      <Modal
        title="거절 확인"
        open={isModalOpen}
        onOk={handleReject}
        onCancel={handleCancel}
      >
        <p>프로젝트를 거절하시겠습니까?</p>
      </Modal>
    </>
  );
};

export default ProdTd;
