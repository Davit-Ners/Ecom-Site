import express from 'express';
import sendEmail from '../models/nodemailer.model.js';
import messagesModel from '../models/messages.js';
const contactController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        res.render('contact/contact');
    },

    confirmMail: async (req, res) => {
        try {
            const { userEmail, username, category, message, title } = req.body;
            if (!userEmail || !category || !message || !title) {
                res.redirect('/contact');
                return;
            }
            const data = { message, userEmail, category, title };
            // const info = await sendEmail(email);
            messagesModel.add(data);
            res.render('contact/confirmation');
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de l\'envoi du mail', error: error.message });
        }
    }


};

export default contactController;