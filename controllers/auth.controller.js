import express from 'express';
import authService from '../services/auth.service.js';
import authModel from '../models/auth.js';
const authController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    loginGET: (req, res) => {
        const username = req.query.username;
        res.render('auth/login', { username: username });
    },

    loginPOST: async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            res.redirect('/login');
            return;
        }

        const user = await authService.login(username, password);

        console.log(user);

        if (user != 1 && user != -1) {
            req.session.user = {
                id: user.id,
                username: username,
                role: user.role
            };
            req.session.isConnected = true;

            if (req.session.user.role === 'admin') req.session.isAdmin = true;

            res.redirect('/');
            return;
        }
        
        res.render('auth/login', { err: 'Mauvaises données.' });
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

    registerGET: (req, res) => {
        res.render('auth/register');
    },

    registerPOST: async (req, res) => {
        const { username, email, firstname, lastname, password, repeatPassword } = req.body;
        if (password != repeatPassword) {
            res.render('auth/register', { err: 'Les mot de passes ne correspondent pas.', infos: req.body })
            return;
        }

        const newUser = await authService.register(username, email, password, firstname, lastname);

        if (newUser === 'email') {
            res.render('auth/register', { err: 'Il existe déja un compte avec cet adresse e-mail.', infos: req.body })
            return;
        }

        if (newUser === 'username') {
            res.render('auth/register', { err: "Il existe déja un compte avec ce nom d'utilisateur.", infos: req.body })
            return;
        }

        res.redirect('/login?username='+ username);
    },

    getAllADMIN: async (req, res) => {
        const users = await authModel.getAll();
        res.json(users);
    }


};

export default authController;