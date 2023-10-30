import express from "express";
import * as loginService from "../service/LoginService.js";

const router = express.Router();

router.get("/login", loginService.getUserLogin);

export default router;
