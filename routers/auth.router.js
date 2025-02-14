import { Router } from "express";
import authController from "../controllers/auth.controller.js";
const authRouter = Router();

authRouter.get('/login', authController.loginGET);

export default authRouter;