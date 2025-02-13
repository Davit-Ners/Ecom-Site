import { Router } from "express";
import cartController from "../controllers/cart.controller.js";
const cartRouter = Router();

cartRouter.get('/panier', cartController.index);

export default cartRouter;