import express from 'express';
import sendEmail from '../models/nodemailer.model.js';
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
            const info = await sendEmail('davit.ners02@gmail.com', 'Hello');
            res.json({ message: 'Email envoyé avec succès', info });
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de l’envoi du mail', error: error.message });
        }
    }


};

export default contactController;