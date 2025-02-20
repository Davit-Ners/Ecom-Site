import pool from '../DB.js';
import productModel from './product.js'

const context = {
    cart: [],
    nextId: 1
};

const cartModel = {

    getAll: async (userId) => {
        const cart = await pool.query(`
                SELECT p.id, p.name, p.price, p.soldedprice, p.description, p.image, p.category, c.product_count
                FROM cart c
                JOIN product p on p.id = product_id
                WHERE user_id = $1
            `, [userId]);
        return cart.rows;
    },

    getTotalPrice: async (userId) => {
        const cart = await cartModel.getAll(userId);
        let totalPrice = 0;

        for (let product of cart) {
            totalPrice += product.price * product.product_count;
        }

        return totalPrice;
    },

    getById: async (productId, userId) => {
        const product = await pool.query(`
                SELECT * FROM cart
                WHERE user_id = $1 AND product_id = $2
            `, [userId, productId]);
        return product.rows;
    },

    add: async (productId, userId) => {
        const product = await cartModel.getById(productId, userId);
        if (product.length > 0) {
            await pool.query(`
                    UPDATE cart
                    SET product_count = (
                        SELECT product_count 
                        FROM cart
                        WHERE product_id = $1 AND user_id = $2
                    ) + 1
                    WHERE product_id = $3 AND user_id = $4
                `, [productId, userId, productId, userId]);
        }
        else {
            await pool.query(`
                    INSERT INTO cart (product_id, user_id, product_count)
                    VALUES ($1, $2, 1)
                `, [productId, userId]);
        }
    }

}

export default cartModel;