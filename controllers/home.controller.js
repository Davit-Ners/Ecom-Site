import express from 'express';
import productService from '../services/product.service.js';
const homeController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: async (req, res) => {
        if (req.session.isConnected) console.log("Role : ", req.session.user.role);
        if (!req.session.isConnected) console.log('KO');
        console.log("Session : ", res.locals.session);
        const dayProducts = await productService.getRandomProduct(3);
        res.render('home/index', { dayProducts });
    },
    


};

export default homeController;