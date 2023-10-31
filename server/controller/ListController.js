import express from "express";
import * as listService from "../service/ListService.js";

const router = express.Router();

router.get("/funding", listService.getListFunding);

export default router;
