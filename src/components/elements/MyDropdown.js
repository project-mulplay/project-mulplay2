import * as React from "react";
import { Link } from "react-router-dom";
import axios from "../../util/api";
import { useRecoilState } from "recoil";
import { MyCategoryAtom } from "../../recoil/MyCategoryAtom";

import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";

import Swal from "sweetalert2";

const MyDropdown = ({ stat, prod_no }) => {
  const pundingOpen = stat === 3 || stat === 4;
  const [value, setValue] = useRecoilState(MyCategoryAtom);

  const stateChange = (event) => {
    event.preventDefault();

    if (stat == 6) {
      Swal.fire({
        icon: "info",
        title: "이미 보류된 프로젝트입니다.",
        showCancelButton: false,
        confirmButtonColor: "#EE833E",
        confirmButtonText: "OK",
      });
    } else
      Swal.fire({
        title: "정말 보류하시겠습니까?",
        icon: "warning",

        showCancelButton: true,
        confirmButtonColor: "#EE833E",
        cancelButtonColor: "gray",
        confirmButtonText: "OK",
        cancelButtonText: "Cancle",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .patch("/user/myproject", {
              prod_no: prod_no,
            })
            .then((response) => {
              Swal.fire({
                icon: "success",
                title: "프로젝트가 보류되었습니다.",
                showCancelButton: false,
                confirmButtonColor: "#EE833E",
                confirmButtonText: "OK",
              });
            });
        }
      });
  };

  const ClickCategory = () => {
    setValue("four");
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
          <MenuItem variant="soft" color="primary" onClick={ClickCategory}>
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
