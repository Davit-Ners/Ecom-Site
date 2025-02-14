import express from 'express';
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
        res.render('/login');
    }


};

export default authController;