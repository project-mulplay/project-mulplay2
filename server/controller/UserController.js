import express from "express";
import * as userService from "../service/UserService.js";

const router = express.Router();

/**
 * 컨트롤러는 요청을 받고, 서비스에 요청을 전달하는 역할을 한다.
 */

//요청 url 확인
router.get("/profile", userService.getUserProfile);

router.get("/info", userService.getUserInfo);

router.patch("/info", userService.patchUserInfo);

router.delete("/info", userService.deleteUserInfo);

router.get("/pw", userService.getUserPw);

router.patch("/pw", userService.patchUserPw);

router.get("/myproject", userService.getUserMyProd);

router.delete("/myproject", userService.deleteUserMyProd);

router.get("/myproceeds", userService.getUserMyProceed);

router.get("/funding-project", userService.getUserMyFundProd);

router.get("/like-project", userService.getUserMyLikeProd);

export default router;
