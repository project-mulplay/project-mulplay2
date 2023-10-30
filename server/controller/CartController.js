import express from "express";
import * as cartService from "../service/CartService.js";

const router = express.Router();


router.get("/payment", cartService.getCartPayment);

router.patch("/payment", cartService.patchCartPayment);

router.post("/payment", cartService.postCartPayment);

export default router;
