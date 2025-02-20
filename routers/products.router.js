import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.get('/product', productController.index);
productRouter.get('/product-detail/:id', productController.details);
productRouter.post('/product/addComment', productController.addComment);
productRouter.get('/product/addProduct', productController.addProductGET);
productRouter.post('/product/filterCategory', productController.filterByCategory);

export default productRouter;