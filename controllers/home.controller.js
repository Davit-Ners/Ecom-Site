import express from 'express';
import productModel from '../models/product';
const homeController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        const randomProducts = productModel.getRandomProduct(3);
        res.render('home/index');
    },
    


};

export default homeController;