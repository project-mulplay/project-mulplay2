import morgan from "morgan";
import express from "express";
import cors from "cors";
import userController from "./controller/UserController.js";

const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// controller 등록
app.use("/user", userController);

const start = async () => {
  try {
    // db.connect() 함수를 호출하지 않고 바로 쿼리를 실행
    app.listen(3000, () => {
      console.log(`서버가 실행되었습니다.`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
