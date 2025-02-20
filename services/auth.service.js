import authModel from "../models/auth.js"


const authService = {

    login: async (username, password) => {
        const user = await authModel.getByUsername(username);
        if (user) {
            if (user.password === password) return user;
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
        
        const user = await authModel.add(username.trim(), email.trim(), password, firstname.trim(), lastname.trim());
        return user;
    }

}

export default authService;