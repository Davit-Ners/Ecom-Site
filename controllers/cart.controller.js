import express from 'express';
import cartService from '../services/cart.service.js';
const cartController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: async (req, res) => {
        if (req.session.isConnected) {
            const cartToRender = await cartService.getAll(req.session.user.id);
            const totalPrice = await cartService.getTotalPrice(req.session.user.id);
            res.render('cart/panier', { cartToRender, totalPrice });
            return;
        }
        const info = 'Il faut être connecté pour avoir acces au panier';
        res.redirect('/login');
    },

    addPOST: async (req, res) => {
        const id = req.body.id;
        await cartService.add(id, req.session.user.id);
        res.redirect('/panier');
    }


};

export default cartController;