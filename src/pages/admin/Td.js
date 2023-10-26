import React from "react";

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
  borderRadius: "5px",
  color: "#fff",
  fontSize: "14px",
};

const rejstyle = {
  width: "60px",
  height: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  border: "1px solid #555",
  color: "#333",
  fontSize: "12px",
};

const Td = ({ item, handleRemove }) => {
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
        <td style={accstyle}>승인</td>
        <td onClick={reject} style={rejstyle}>
          거절
        </td>
      </tr>
    </>
  );
};

export default Td;
