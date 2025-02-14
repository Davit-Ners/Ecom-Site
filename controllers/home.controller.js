import express from 'express';
import productService from '../services/product.service.js';
const homeController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        if (req.session.isConnected) console.log('OK');
        if (!req.session.isConnected) console.log('KO');
        console.log("Session : ", res.locals.session)
        const dayProducts = productService.getRandomProduct(3);
        res.render('home/index', { dayProducts });
    },
    


};

export default homeController;