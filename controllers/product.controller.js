import express from 'express';
const productController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        res.render('products/product');
    },
    


};

export default productController;