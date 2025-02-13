import productModel from "../models/product.js"


const productService = {

    getAll: () => {
        const product = productModel.getAll();
        return product;
    },

    getRandomProduct: (nb) => {
        const products = productModel.getRandomProduct(nb);
        return products;
    },

    getById: (id) => {
        const product = productModel.getById(id);
        return product;
    },

    getComments: (id) => {
        const comments = productModel.getComments(id);
        return comments;
    }

}

export default productService;