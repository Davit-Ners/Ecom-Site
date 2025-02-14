import { Router } from "express";
import authController from "../controllers/auth.controller.js";
const authRouter = Router();

authRouter.get('/login', authController.loginGET);
authRouter.post('/login', authController.loginPOST);

export default authRouter;