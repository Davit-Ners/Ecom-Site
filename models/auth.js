import pool from "../DB.js";

const context = {
    users: [
        {
            id: 1,
            role: "admin",
            username: "Davit",
            email: "davit.ners02@gmail.com",
            password: 'test1234',
            firstname: "Davit",
            lastname: "Nersesyan"
        }
    ],
    nextId: 2
}

const authModel = {

    getByUsername: async (username) => {
        const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        return user.rows[0] || undefined;
    },

    getByEmail: async (email) => {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return user.rows[0] || undefined;
    },

    add: async (username, email, password, firstname, lastname) => {
        const newUser = {
            id: context.nextId,
            role: "member",
            username: username,
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        }

        pool.query(`INSERT INTO users (role, username, email, password, firstname, lastname) VALUES ('member', $1, $2, $3, $4, $5)`,
                  [username, email, password, firstname, lastname]
        );

        return newUser;
    },

    getAll: async () => {
        const users = await pool.query('SELECT * FROM users');
        return users.rows;
    }

}

export default authModel;