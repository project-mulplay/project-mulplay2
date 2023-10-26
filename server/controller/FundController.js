import express from "express";
import * as fundService from "../service/FundService.js";

const router = express.Router();

/**
 * 컨트롤러는 요청을 받고, 서비스에 요청을 전달하는 역할을 한다.
 */

//요청 url 확인
router.get("/funding", fundService.getProjectFunding);

router.get("/fundlike", fundService.getProjectFundlike);

router.post("/fundlike", fundService.postProjectFundlike);

router.delete("/fundlike", fundService.deleteProjectFundlike);

router.get("/fundreward", fundService.getProjectFundReward);

router.get("/fundtagdata", fundService.getProjectFundTagData);

export default router;
