import cartModel from "../models/cart.js"

const cartService = {

    getAll: () => {
        const cart = cartModel.getAll();
        return structuredClone(cart);
    },

    getTotalPrice: () => {
        const totalPrice = Math.round(cartModel.getTotalPrice()*100) / 100;
        return totalPrice;
    },

    add: (productId) => {
        const newProduct = cartModel.add(productId);
    }
    
}

export default cartService;