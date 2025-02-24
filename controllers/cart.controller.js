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
        if (req.session.isConnected) {
            const id = req.body.id;
            await cartService.add(id, req.session.user.id);
            res.redirect('/panier');
            return;
        }
        res.redirect('/login');
    },

    delete: async (req, res) => {
        const cartId = req.body.cartId;
        await cartService.delete(cartId);
        res.redirect('/panier');
    },

    addCount: async (req, res) => {
        const cartId = req.body.cartId;
        await cartService.addCount(cartId);
        res.redirect('/panier')
    },

    removeCount: async (req, res) => {
        const { cartId, productCount } = req.body;
        if (parseInt(productCount) > 1) {
            await cartService.removeCount(cartId);
        }

        res.redirect('/panier')
    }


};

export default cartController;