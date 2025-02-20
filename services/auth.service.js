import authModel from "../models/auth.js"
import bcrypt from 'bcrypt';

async function hashPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const authService = {

    login: async (username, password) => {
        const user = await authModel.getByUsername(username);
        if (user) {
            const verifyPassword = await bcrypt.compare(password, user.password);
            if (verifyPassword) return user;
            return 1;
        }
        return -1;
    },

    register: async (username, email, password, firstname, lastname) => {

        if (await authModel.getByEmail(email)) {
            return 'email';
        }

        if (await authModel.getByUsername(username)) {
            return 'username';
        }

        const hashedPassword = await hashPassword(password);
        
        const user = await authModel.add(username.trim(), email.trim(), hashedPassword, firstname.trim(), lastname.trim());
        return user;
    }

}

export default authService;