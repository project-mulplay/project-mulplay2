import React, { useState, useEffect } from "react";
import axios from "../../util/api";

import Stack from "@mui/joy/Stack";
import InputMedium from "../../components/elements/InputMedium";

import "./MyInfoEdit.css";

export default function MyPwEdit() {
  const [userPw, setUserPw] = useState("");
  const [currentPw, setCurrentPw] = React.useState("");

  const [newPw, setNewPw] = useState("");
  const [doublecheckPw, setdoublecheckPw] = useState("");

  const [isCurrentPwValid, setIsCurrentPwValid] = useState(false);

  useEffect(() => {
    axios.get("/user/pw").then((response) => {
      setUserPw(response.data.user_pw || "");
    });
  }, []);

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
        .patch("/user/pw", {
          user_pw: doublecheckPw,
        })
        .then((response) => {
          alert("비밀번호가 수정되었습니다.");
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
