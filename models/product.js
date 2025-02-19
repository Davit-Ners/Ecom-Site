import data from '../data.json' with { type: 'json' };
import comments from '../comment.json' with { type: 'json' };
import pool from '../DB.js';

const context = {
    products: data.products,
    nextId: 21,
    comments: comments.reviews
};

const productModel = {
    
    getAll: async () => {
        try {
            const products = await pool.query('SELECT * FROM product');
            return products.rows;
        }
        catch (err) {
            throw err;
        }
    },

    getById: async (id) => {
        try {
            const product = await pool.query('SELECT * FROM product WHERE id = $1', [id]);
            return product.rows[0];
        }
        catch (err) {
            throw err;
        }
    },

    add: () => {

    },

    update: () => {

    },

    delete: () => {

    },

    getRandomProduct: async (nb) => {
        try {
            const products = await pool.query('SELECT * FROM product ORDER BY RANDOM() LIMIT $1', [nb]);
            return products.rows;
        }
        catch (err) {
            throw err;
        }
    },

    getComments: async (id) => {
        const productComments = await pool.query('SELECT * FROM comments WHERE product_id = $1', [id]);
        return productComments.rows;
    },

    addComment: (username, stars, comment, productId) => {
        const newComment = {
            username: username,
            stars: stars,
            comment: comment,
            productId: productId
        };

        context.comments.push(newComment);

        return productId;
    }

}

export default productModel;