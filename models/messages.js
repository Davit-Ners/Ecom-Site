import pool from '../DB.js';

const messagesModel = {

    getAll: async () => {
        const messages = await pool.query('SELECT * FROM messages');
        return messages.rows;
    },

    getTotalPrice: async (userId) => {
    },

    getById: async (id) => {
    },

    add: async ({message, userEmail, category, title}) => {
        const date = new Date().toLocaleString().split(' ')[0];
        await pool.query(`
                INSERT INTO messages ("content", "userEmail", "receivedDate", "category", "title") 
                VALUES ($1, $2, $3, $4, $5)
            `, [message, userEmail, date, category, title]);
    },

    delete: async (messageId) => {
        try {
            await pool.query(`DELETE FROM messages WHERE id = $1`, [messageId]);
        }
        catch (err) {
            throw err;
        }
    }

}

export default messagesModel;