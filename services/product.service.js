import productModel from "../models/product.js"


const productService = {

    getAll: async () => {
        const product = await productModel.getAll();
        return product;
    },

    getRandomProduct: async (nb) => {
        const products = await productModel.getRandomProduct(nb);
        return products;
    },

    getById: async (id) => {
        const product = await productModel.getById(id);
        return product;
    },

    getByCategory: async (category) => {
        const products = await productModel.getByCategory(category);
        return products;
    },

    getByPrice: async (orderDir) => {
        const products = await productModel.getByPrice(orderDir);
        return products;
    },

    getComments: async (id) => {
        const comments = await productModel.getComments(id);
        return comments;
    },

    addComment: async (username, stars, comment, idProduct) => {
        let starsString = '';
        for (let i = 0; i < parseInt(stars); i++) {
            starsString += '★';
        }

        const productId = await productModel.addComment(username, starsString, comment, idProduct);

        return productId;
    }

}

export default productService;