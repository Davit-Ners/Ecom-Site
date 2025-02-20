import { Router } from "express";
import cartController from "../controllers/cart.controller.js";
const cartRouter = Router();

cartRouter.get('/panier', cartController.index);
cartRouter.post('/cart/add', cartController.addPOST);
cartRouter.post('/panier/removeProduct', cartController.delete);

export default cartRouter;