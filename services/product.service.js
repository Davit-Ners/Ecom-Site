import productModel from "../models/product.js"


const productService = {

    getAll: () => {
        const product = productModel.getAll();
        return product;
    }

}

export default productService;