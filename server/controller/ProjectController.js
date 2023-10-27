import express from "express";
import * as projectService from "../service/ProjectService.js";

const router = express.Router();

/**
 * 컨트롤러는 요청을 받고, 서비스에 요청을 전달하는 역할을 한다.
 */

//요청 url 확인
router.post("/infoproject", projectService.postProjectMake);

router.post("/infotag", projectService.postProjectTag);

router.post("/inforeward", projectService.postProjectReward);

export default router;
