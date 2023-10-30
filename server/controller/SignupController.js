import express from "express";
import * as signupService from "../service/SignupService.js";

const router = express.Router();

router.post("/signup", signupService.postUserSignup);

export default router;
