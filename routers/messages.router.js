import { Router } from 'express';
import messagesController from '../controllers/messages.controller.js';
const messageRouter = Router();

messageRouter.get('/messages', messagesController.index);
messageRouter.get('/messages/:id', messagesController.detail);
messageRouter.post('/messages/:id', messagesController.responseToUserPOST);

export default messageRouter;