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
    },

    detail: async (req, res) => {
        const id = parseInt(req.params.id);
        if (!id || isNaN(id) || id < 1) {
            res.json({err: "Not found"});
            return;
        }

        const message = await messagesModel.getById(id);
        console.log(message);
        
        if (!message) {
            res.json({err: "Not found"});
            return;
        }

        res.render('messages/detail', { message });
    },

    


};

export default messagesController;