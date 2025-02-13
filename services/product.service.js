import productModel from "../models/product.js"


const productService = {

    getAll: () => {
        const product = productModel.getAll();
        return product;
    },

    getRandomProduct: (nb) => {
        const products = productModel.getRandomProduct(nb);
        return products;
    }

}

export default productService;