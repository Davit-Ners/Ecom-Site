import express from 'express';
import cartService from '../services/cart.service.js';
const cartController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        const cartToRender = cartService.getAll();
        const totalPrice = cartService.getTotalPrice();
        res.render('cart/panier', { cartToRender, totalPrice });
    }


};

export default cartController;