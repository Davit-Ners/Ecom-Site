const context = {
    users: [
        {
            id: 1,
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

    getByUsername: (username) => {
        const user = context.users.find(u => u.username === username.trim());
        return structuredClone(user);
    },

    getByEmail: (email) => {
        const user = context.users.find(u => u.email === email.trim());
        return structuredClone(user);
    },

    add: (username, email, password, firstname, lastname) => {
        const newUser = {
            id: context.nextId,
            username: username,
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        }

        context.users.push(newUser);
        context.nextId++;

        return newUser;
    },

    getAll: () => {
        return structuredClone(context.users);
    }

}

export default authModel;