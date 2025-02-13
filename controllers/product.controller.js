import express from 'express';
import productModel from '../models/product.js';
import productService from '../services/product.service.js';
const productController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        const products = productService.getAll();
        res.render('products/product', { products });
    },
    


};

export default productController;