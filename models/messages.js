import pool from '../DB.js';

const messagesModel = {

    getAll: async () => {
        const messages = await pool.query('SELECT * FROM messages');
        return messages.rows;
    },

    getTotalPrice: async (userId) => {
    },

    getById: async (productId, userId) => {
    },

    delete: async (cartId) => {
        try {
            await pool.query(`DELETE FROM cart WHERE id = $1`, [cartId]);
        }
        catch (err) {
            throw err;
        }
    }

}

export default messagesModel;