import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import axios from "axios";

import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";

const MyDropdown = ({ stat, prod_no }) => {
  const pundingOpen = stat === 3 || stat === 4;
  const [cookies, setCookie] = useCookies();

  console.log(prod_no);

  const stateChange = (event) => {
    event.preventDefault();
    console.log(event.target);
    if (stat == 6) {
      alert("이미 보류된 프로젝트입니다.");
    } else if (window.confirm("정말 보류하시겠습니까?")) {
      axios
        .patch("http://localhost:3300/user/myproject", {
          user_no: cookies.token,
          prod_no: prod_no,
        })
        .then((response) => {
          console.log("update 요청 성공:", response);

          alert("프로젝트가 보류되었습니다.");
        })
        .catch((error) => {
          console.error("요청 실패:", error);
        });
    }
  };

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "outlined", color: "neutral" } }}
        sx={{ position: "absolute", top: "15px", right: "15px" }}
      >
        <MoreVert />
      </MenuButton>

      <Menu placement="right-end">
        {pundingOpen ? (
          <MenuItem variant="soft" color="primary">
            <Link to="/mypages/myproceeds">
              <ListItemDecorator>
                <Edit />
              </ListItemDecorator>
              수익관리
            </Link>
          </MenuItem>
        ) : (
          <>
            <MenuItem variant="soft" color="danger" onClick={stateChange}>
              <ListItemDecorator>
                <DeleteForever />
              </ListItemDecorator>
              보류하기
            </MenuItem>
          </>
        )}
      </Menu>
    </Dropdown>
  );
};

export default MyDropdown;
