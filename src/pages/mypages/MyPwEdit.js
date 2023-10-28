import * as React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import Stack from "@mui/joy/Stack";
import InputMedium from "../../components/elements/InputMedium";
import "./MyInfoEdit.css";

export default function MyPwEdit() {
  const [loggedInUserId, setLoggedInUserId] = useState(1); // 사용자 아이디 초기화
  const [userPw, setUserPw] = useState("");
  const [currentPw, setCurrentPw] = React.useState(""); //

  const [newPw, setNewPw] = useState("");
  const [doublecheckPw, setdoublecheckPw] = useState("");

  const [isCurrentPwValid, setIsCurrentPwValid] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3300/user/pw", {
        params: {
          user_no: loggedInUserId,
        },
      })
      .then((response) => {
        // 요청 성공 시 실행할 코드
        setUserPw(response.data.user_pw || "");

        console.log("pwedit 요청 성공:", response);
      })
      .catch((error) => {
        // 에러 처리
        console.error("요청 실패:", error);
      });
  }, [loggedInUserId]);

  // Check current password
  const handleSubmitCheckPassword = (event) => {
    event.preventDefault();
    if (currentPw === userPw) {
      setIsCurrentPwValid(true);
    } else {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
    }
  };

  // Update new password
  const handleSubmitChangePassword = (event) => {
    event.preventDefault();
    if (newPw !== doublecheckPw) {
      alert("입력한 비밀번호가 일치하지 않습니다");
      return;
    }
    if (window.confirm("비밀번호를를 수정하시겠습니까?")) {
      axios
        .patch("http://localhost:3300/user/pw", {
          user_no: loggedInUserId,
          user_pw: doublecheckPw,
        })
        .then((response) => {
          console.log("pwupdate 요청 성공:", response);

          alert("비밀번호가 수정되었습니다.");
        })
        .catch((error) => {
          console.error("요청 실패:", error);
        });
    }
  };

  return (
    <form
      className="myInfoEdit"
      onSubmit={
        isCurrentPwValid
          ? handleSubmitChangePassword
          : handleSubmitCheckPassword
      }
    >
      <Stack spacing={1}>
        <ul className="editForm">
          {!isCurrentPwValid ? (
            <>
              <li>
                <h1 className="pw_editHeader">비밀번호변경</h1>
                <p className="editContent">현재 비밀번호를 입력해주세요</p>
              </li>

              <li>
                <span>비밀번호</span>
                <InputMedium
                  type="password"
                  name="current_pw"
                  placeholder={"비밀번호를 입력해주세요"}
                  value={currentPw}
                  onChange={(e) => {
                    setCurrentPw(e.target.value); // 현재 비밀번호 검증
                  }}
                  required
                />
              </li>
              <li className="buttonSection">
                <button type="submit" className="pwEditButton">
                  확인
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <h1 className="pw_editHeader">비밀번호변경</h1>
                <p className="editContent">
                  변경하실 새로운 비밀번호를 입력해주세요
                </p>
              </li>

              <li>
                <span>비밀번호</span>
                <InputMedium
                  type="password"
                  name="new_pw"
                  placeholder={"비밀번호를 입력해주세요"}
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  required
                />
              </li>
              <li>
                <span>비밀번호 확인</span>
                <InputMedium
                  type="password"
                  name="doublecheck_pw"
                  placeholder={"비밀번호를 입력해주세요"}
                  value={doublecheckPw}
                  onChange={(e) => setdoublecheckPw(e.target.value)}
                  required
                />
              </li>
              <li className="buttonSection">
                <button type="submit" className="pwEditButton">
                  확인
                </button>
              </li>
            </>
          )}
        </ul>
      </Stack>
    </form>
  );
}
