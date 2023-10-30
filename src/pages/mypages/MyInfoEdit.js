import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/joy/Stack";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import profile from "../../assets/image/profile.png";
import profile1 from "../../assets/image/profile1.png";
import profile2 from "../../assets/image/profile2.png";
import profile3 from "../../assets/image/profile3.png";
import profile4 from "../../assets/image/profile4.png";
import InputMedium from "../../components/elements/InputMedium";
import "./MyInfoEdit.css";

const images = [profile1, profile2, profile3, profile4];

export default function MyInfoEdit({ user_no }) {
  const navigate = useNavigate();
  const [loggedInUserId, setLoggedInUserId] = useState(1); // 사용자 아이디 초기화

  const [userId, setUserId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userAddress, setUserAddress] = React.useState("");

  const [selectedImage, setSelectedImage] = React.useState(profile);
  const [modalOpen, setModalOpen] = React.useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/info", {
        params: {
          user_no: loggedInUserId,
        },
      })
      .then((response) => {
        // 요청 성공 시 실행할 코드
        // setData(response.data);
        setUserId(response.data.user_id || "");
        setUserName(response.data.user_name || "");
        setUserPhone(response.data.user_phone || "");
        setUserAddress(response.data.user_address || "");
        console.log("infoedit 요청 성공:", response);
      })
      .catch((error) => {
        // 에러 처리
        console.error("요청 실패:", error);
      });
  }, [loggedInUserId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);
    if (window.confirm("회원정보를 수정하시겠습니까?")) {
      axios
        .patch("http://localhost:3300/user/info", {
          user_name: userName,
          user_phone: userPhone,
          user_address: userAddress,
          user_no: loggedInUserId,
        })
        .then((response) => {
          // setUserName(response.data.user_name);
          // setUserPhone(response.data.user_phone);
          // setUserAddress(response.data.user_address);
          // setData(response.data);
          console.log("update 요청 성공:", response);

          alert("회원정보가 수정되었습니다.");
        })
        .catch((error) => {
          console.error("요청 실패:", error);
        });
    }
  };
  const handleDelete = () => {
    if (window.confirm("정말 탈퇴하시겠습니까?")) {
      axios
        .delete("http://localhost:3300/user/info", {
          params: {
            user_no: loggedInUserId,
          },
        })
        .then((response) => {
          console.log("요청 성공:", response);

          alert("회원탈퇴가 완료되었습니다.");
          navigate("/");
        })
        .catch((error) => {
          console.error("요청 실패:", error);
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
              <img src={selectedImage} alt="profile-img" />
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
                width: 400,
                bgcolor: "background.paper",
                borderRadius: 10,
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
              }}
            >
              <div className="imageSelection">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`selectable-img-${index}`}
                    onClick={() => {
                      setSelectedImage(image); // 클릭 시 해당 이미지로 변경
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
