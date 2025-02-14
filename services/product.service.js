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
    },

    addComment: (username, stars, comment, idProduct) => {
        let starsString = '';
        for (let i = 0; i < parseInt(stars); i++) {
            starsString += '★';
        }

        const productId = productModel.addComment(username, starsString, comment, idProduct);

        return productId;
    }

}

export default productService;