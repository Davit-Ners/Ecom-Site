import cartModel from "../models/cart.js"

const cartService = {

    getAll: () => {
        const cart = cartModel.getAll();
        return cart;
    },

    getTotalPrice: () => {
        const totalPrice = cartModel.getTotalPrice();
        return totalPrice;
    }
    
}

export default cartService;