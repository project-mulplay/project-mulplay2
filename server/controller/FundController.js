import express from "express";
import * as fundService from "../service/FundService.js";

const router = express.Router();

router.get("/funding", fundService.getProjectFunding);

router.get("/fundlike", fundService.getProjectFundlike);

router.post("/fundlike", fundService.postProjectFundlike);

router.delete("/fundlike", fundService.deleteProjectFundlike);

router.get("/fundreward", fundService.getProjectFundReward);

router.get("/fundtagdata", fundService.getProjectFundTagData);

export default router;
