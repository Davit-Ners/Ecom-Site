const context = {
    cart: {},
    nextId: 1
};

const cartModel = {

    getAll: () => {
        const cart = context.cart;
        return structuredClone(cart);
    },

    getTotalPrice: () => {
        const cart = cartModel.getAll();
        let totalPrice = 0;

        for (let product of cart) {
            totalPrice += product.price;
        }

        return totalPrice;
    }

}

export default cartModel;