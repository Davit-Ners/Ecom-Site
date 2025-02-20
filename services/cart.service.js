import cartModel from "../models/cart.js"

const cartService = {

    getAll: async (userId) => {
        const cart = await cartModel.getAll(userId);
        return cart;
    },

    getTotalPrice: async (userId) => {
        const totalPrice = Math.round(await cartModel.getTotalPrice(userId)*100) / 100;
        return totalPrice;
    },

    add: async (productId, userId) => {
        await cartModel.add(productId, userId);
    },

    delete: async (cartId) => {
        await cartModel.delete(cartId);
    }
    
}

export default cartService;