import cartModel from "../models/cart.js"

const cartService = {

    getAll: async (userId) => {
        const cart = await cartModel.getAll(userId);
        return cart;
    },

    getTotalPrice: async (userId) => {
        const totalPrice = Math.round(await cartModel.getTotalPrice(userId)*100) / 100;
        if (totalPrice == 0) return false;
        return totalPrice.toFixed(2);
    },

    add: async (productId, userId) => {
        await cartModel.add(productId, userId);
    },

    delete: async (cartId) => {
        await cartModel.delete(cartId);
    },

    addCount: async (cartId) => {
        await cartModel.addCount(cartId);
    },

    removeCount: async (cartId) => {
        await cartModel.removeCount(cartId);
    }
    
}

export default cartService;