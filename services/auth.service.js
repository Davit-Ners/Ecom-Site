import authModel from "../models/auth.js"


const authService = {

    login: (username, password) => {
        const user = authModel.getByUsername(username);
        if (user) {
            if (user.password === password) return user;
            return 1;
        }
        return -1;
    },

    register: (username, email, password, firstname, lastname) => {

        if (authModel.getByEmail(email)) {
            return 'email';
        }

        if (authModel.getByUsername(username)) {
            return 'username';
        }
        
        const user = authModel.add(username.trim(), email.trim(), password, firstname.trim(), lastname.trim());
        return user;
    }

}

export default authService;