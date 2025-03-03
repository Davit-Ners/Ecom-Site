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
            const { email, username, categorie, message } = req.body;
            if (!email || !categorie || !message) {
                res.redirect('/contact');
                return;
            }
            console.log(email, username, categorie, message);
            // const info = await sendEmail(email);
            res.render('contact/confirmation');
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de l\'envoi du mail', error: error.message });
        }
    }


};

export default contactController;