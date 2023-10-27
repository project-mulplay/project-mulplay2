import express from "express";
import * as cartService from "../service/CartService.js";

const router = express.Router();

/**
 * 컨트롤러는 요청을 받고, 서비스에 요청을 전달하는 역할을 한다.
 */

//요청 url 확인
router.get("/payment", cartService.getCartPayment);

router.patch("/payment", cartService.patchCartPayment);

router.post("/payment", cartService.postCartPayment);

export default router;
