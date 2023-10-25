import express from "express";
import * as userService from "../service/UserService.js";

const router = express.Router();
//요청 url 확인
router.get("/user/proile", async (req, res) => {
  console.log("testestsetsetset");
  res.send(userService.getUserProfile(req.body.user_no));
});

export default router;
