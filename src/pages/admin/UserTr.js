import React from "react";
import UserTd from "./UserTd";

const UserTr = ({ Info, handleModal }) => {
  return (
    <tbody>
      {Info.map((item) => {
        return (
          <UserTd key={item.user_no} item={item} handleModal={handleModal} />
        );
      })}
    </tbody>
  );
};

export default UserTr;
