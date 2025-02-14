import express from 'express';
import authService from '../services/auth.service.js';
const authController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    loginGET: (req, res) => {
        res.render('auth/login');
    },

    loginPOST: (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            res.redirect('/login');
            return;
        }

        const user = authService.login(username, password);

        if (user != 1 || user != -1) {
            req.session.user = {
                id: user.id,
                username
            };
            req.session.isConnected = true;

            res.redirect('/');
            return;
        }
        
        res.render('/login');
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

    registerGET: (req, res) => {
        res.render('auth/register');
    }


};

export default authController;