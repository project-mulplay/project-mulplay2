import React, { useEffect } from "react";
import axios from "../../util/api";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ProfileImgAtom } from "../../recoil/ProfileImgAtom";

import profile0 from "../../assets/image/profile0.png";
import profile1 from "../../assets/image/profile1.png";
import profile2 from "../../assets/image/profile2.png";
import profile3 from "../../assets/image/profile3.png";
import profile4 from "../../assets/image/profile4.png";
import InputMedium from "../../components/elements/InputMedium";

import "./MyInfoEdit.css";

import Stack from "@mui/joy/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const images = [profile0, profile1, profile2, profile3, profile4];

export default function MyInfoEdit() {
  const navigate = useNavigate();

  const [userId, setUserId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userAddress, setUserAddress] = React.useState("");
  const [userProfile, setUserProfile] = useRecoilState(ProfileImgAtom);

  const [modalOpen, setModalOpen] = React.useState(false);

  const authCheck = () => {
    axios.get("/user/info").then((response) => {
      console.log("get info : ", response.data);
      setUserId(response.data.user_id || "");
      setUserName(response.data.user_name || "");
      setUserPhone(response.data.user_phone || "");
      setUserAddress(response.data.user_address || "");
      setUserProfile(response.data.user_profileimg || 0);
    });
  };
  useEffect(() => {
    authCheck();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (window.confirm("회원정보를 수정하시겠습니까?")) {
      axios
        .patch("/user/info", {
          user_name: userName,
          user_phone: userPhone,
          user_address: userAddress,
          user_profileimg: userProfile,
        })
        .then((response) => {
          alert("회원정보가 수정되었습니다.");
        });
    }
  };
  const handleDelete = () => {
    if (window.confirm("정말 탈퇴하시겠습니까?")) {
      axios.delete("/user/info").then((response) => {
        alert("회원탈퇴가 완료되었습니다.");
        Cookies.remove("token");
        navigate("/");
      });
    }
  };

  return (
    <form className="myInfoEdit" onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <ul className="editForm">
          <li>
            <h1 className="editHeader">회원정보</h1>
          </li>

          <li className="imgEdit">
            <span>프로필 이미지</span>
            <div>
              <img
                src={require(`../../assets/image/profile${userProfile}.png`)}
                alt="profile-img"
              />
              <button type="button" onClick={() => setModalOpen(true)}>
                이미지변경
              </button>
            </div>
          </li>
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 500,
                bgcolor: "background.paper",
                borderRadius: 10,
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
              }}
            >
              <span>선택해서 이미지변경하기</span>
              <div className="imageSelection">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`selectable-img-${index}`}
                    onClick={() => {
                      setUserProfile(index); // 클릭 시 해당 이미지로 변경
                      setModalOpen(false); // 클릭 후 모달 창 닫기
                    }}
                  />
                ))}
              </div>
            </Box>
          </Modal>
          <li>
            <span>아이디</span>
            <InputMedium placeholder={userId} disabled />
          </li>
          <li>
            <span>이름</span>
            <InputMedium
              name="user_name"
              placeholder={"이름을 입력하세요"}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </li>
          <li>
            <span>전화번호</span>
            <InputMedium
              name="user_phone"
              placeholder={"전화번호를 입력하세요"}
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              required
            />
          </li>
          <li>
            <span>주소</span>
            <InputMedium
              name="user_address"
              placeholder={"주소를 입력하세요"}
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              required
            />
          </li>
          <li className="buttonSection">
            <button type="submit" className="editButton" onClick={handleSubmit}>
              회원정보수정
            </button>

            <button
              type="button"
              className="deleteButton"
              onClick={handleDelete}
            >
              회원탈퇴
            </button>
          </li>
        </ul>
      </Stack>
    </form>
  );
}
