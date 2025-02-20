import { Router } from "express";
import cartController from "../controllers/cart.controller.js";
const cartRouter = Router();

cartRouter.get('/panier', cartController.index);
cartRouter.post('/cart/add', cartController.addPOST);
cartRouter.post('/panier/removeProduct', cartController.delete);
cartRouter.post('/panier/removeCount', cartController.removeCount);
cartRouter.post('/panier/addCount', cartController.addCount);

export default cartRouter;