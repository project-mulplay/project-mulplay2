import morgan from "morgan";
import express from "express";
import cors from "cors";
import userController from "./controller/UserController.js";
// 서버를 실행하는 core
const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// controller 등록
app.use("/user", userController);

const start = async () => {
  try {
    // db.connect() 함수를 호출하지 않고 바로 쿼리를 실행
    // 로컬호스트 3300으로 유지
    app.listen(3300, () => {
      console.log(`서버가 실행되었습니다.`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();