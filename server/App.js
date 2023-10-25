import db from "./config/db.js";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import userController from "./controller/UserController.js";

const app = express();
app.use(cors);
app.use(morgan("dev"));

//controller 등록
app.use("/user/proile", userController);

const start = async () => {
  try {
    await db.connect();
    app.listen(3000, () => {
      console.log(`서버가 실행되었습니다. `);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
