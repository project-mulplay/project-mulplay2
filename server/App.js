import morgan from "morgan";
import express from "express";
import cors from "cors";
import userController from "./controller/UserController.js";
import fundController from "./controller/FundController.js";
import cartController from "./controller/CartController.js";
import listController from "./controller/ListController.js";
import loginController from "./controller/LoginController.js";
import signupController from "./controller/SignupController.js";
import projectController from "./controller/ProjectController.js";

// 서버를 실행하는 core
const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// controller 등록
app.use("/user", userController);  // 마이페이지
app.use("/signin", loginController); // 로그인
app.use("/register", signupController); // 회원가입
app.use("/project", fundController);  // 펀딩 상세 페이지
app.use("/cart", cartController);  // 결제 페이지
app.use("/list", listController);  // 펀딩 리스트 페이지
app.use("/make", projectController);  // 프로젝트 제작 페이지


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
