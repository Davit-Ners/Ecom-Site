import { Router } from "express";
import cartController from "../controllers/cart.controller.js";
const cartRouter = Router();

cartRouter.get('/panier', cartController.index);
cartRouter.post('/product-detail/:id', cartController.addPOST);

export default cartRouter;