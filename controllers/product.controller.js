import express from 'express';
import productModel from '../models/product.js';
import productService from '../services/product.service.js';
const productController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: async (req, res) => {
        const products = await productService.getAll();
        res.render('products/product', { products });
    },

    details: async (req, res) => {
        const id = req.params.id;
        const product = await productService.getById(id);
        console.log(product);
        const productComment = productService.getComments(id);
        const script = 'product.details.js';
        res.render('products/product-detail', { product, productComment, script });
    },

    addComment: (req, res) => {
        const { username, comment, stars, productId } = req.body;
        const product = productService.getById(productId);
        const productComment = productService.getComments(productId);
        const script = 'product.details.js';

        if (!req.session.isConnected) {
            res.render(`products/product-detail`, {err: 'Il faut avoir un compte pour laisser un commentaire.', product, productComment, script });
            return;
        }
        
        if (!stars) {
            res.render(`products/product-detail`, { err: 'Il faut mettre une note svp.', product, productComment, script });
            return;
        }

        if (!comment.trim()) {
            res.render(`products/product-detail`, { err: 'Il faut mettre un commentaire svp.', product, productComment, script });
            return;
        }

        productService.addComment(username, stars, comment, productId);
        res.redirect(`/product-detail/${productId}`);
    },

    addProductGET: (req, res) => {
        res.render('products/addProduct');
    }
    


};

export default productController;