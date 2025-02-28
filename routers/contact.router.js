import { Router } from 'express';
import contactController from '../controllers/contact.controller.js';
const contactRouter = Router();

contactRouter.get('/contact', contactController.index);
contactRouter.post('/contact', contactController.confirmMail);

export default contactRouter;