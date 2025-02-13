import express from 'express';
const contactController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        res.render('contact/contact');
    }


};

export default contactController;