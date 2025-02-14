import authModel from "../models/auth.js"


const authService = {

    login: (username, password) => {
        const user = authModel.getByUsername(username);
        if (user) {
            if (user.password === password) return user;
            return 1;
        }
        return -1;
    }

}

export default authService;