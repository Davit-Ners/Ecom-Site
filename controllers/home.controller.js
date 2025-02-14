import express from 'express';
import productModel from '../models/product.js';
import productService from '../services/product.service.js';
const homeController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        const dayProducts = productService.getRandomProduct(3);
        res.render('home/index', { dayProducts });
    },
    


};

export default homeController;