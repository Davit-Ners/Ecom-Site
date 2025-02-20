import { Router } from "express";
import authController from "../controllers/auth.controller.js";
const authRouter = Router();

authRouter.get('/login', authController.loginGET);
authRouter.post('/login', authController.loginPOST);
authRouter.get('/logout', authController.logout);
authRouter.get('/register', authController.registerGET);
authRouter.post('/register', authController.registerPOST);
authRouter.get('/ADMIN', authController.getAllADMIN);

export default authRouter;