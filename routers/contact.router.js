import { Router } from 'express';
import contactController from '../controllers/contact.controller.js';
const contactRouter = Router();

contactRouter.get('/contact', contactController.index);

export default contactRouter;