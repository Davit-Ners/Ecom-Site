import { Router } from 'express';
import messagesController from '../controllers/messages.controller.js';
const messageRouter = Router();

messageRouter.get('/messages', messagesController.index);

export default messageRouter;