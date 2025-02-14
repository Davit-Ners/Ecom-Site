import express from 'express';
const authController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    loginGET: (req, res) => {
        res.render('auth/login');
    }


};

export default authController;