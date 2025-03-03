import express from 'express';
import messagesModel from '../models/messages.js';
import messageService from '../services/messages.service.js';
const messagesController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: async (req, res) => {
        // if (req.session?.user?.role !== 'admin') {
        //     res.redirect('/');
        //     return;
        // }

        const messages = await messageService.getAll();
        console.log(messages);
        res.render('messages/index', { messages });
    }


};

export default messagesController;