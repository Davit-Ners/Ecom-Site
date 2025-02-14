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

    details: (req, res) => {
        const id = req.params.id;
        const product = productService.getById(id);
        const productComment = productService.getComments(id);
        const script = 'product.details.js';
        res.render('products/product-detail', { product, productComment, script });
    }
    


};

export default productController;