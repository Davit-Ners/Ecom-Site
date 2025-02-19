import productModel from './product.js'

const context = {
    cart: [],
    nextId: 1
};

const cartModel = {

    getAll: () => {
        const cart = context.cart;
        return cart;
    },

    getTotalPrice: () => {
        const cart = cartModel.getAll();
        let totalPrice = 0;

        for (let product of cart) {
            totalPrice += product.price * product.count;
        }

        return totalPrice;
    },

    getById: (id) => {
        const product = context.cart.find(p => p.id == id);
        return product;
    },

    add: async (productId) => {
        const product = cartModel.getById(productId);
        if (product) product.count++;
        else {
            const cartProduct = await productModel.getById(productId);
            cartProduct.count = 1;
            context.cart.push(cartProduct);
            return cartProduct;
        }
        console.log(context.cart, 'ah');
        return product;
    }

}

export default cartModel;