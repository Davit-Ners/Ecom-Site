import messagesModel from "../models/messages.js";

const messageService = {

    getAll: async () => {
        const messages = await messagesModel.getAll();
        const mapedMessages = messages.map(({ id, title, userEmail, checked, receivedDate, category }) => ({
            id,
            title,
            userEmail,
            etat: checked ? 'Lu' : 'Non lu',
            receivedDate: new Date(receivedDate).toLocaleDateString("fr-FR"),
            category
        }));

        return mapedMessages;
    },

    getById: async (id) => {
        const message = await messagesModel.getById(id);
        const mapedMessages = {
            id: message.id, 
            content: message.content,
            userEmail: message.userEmail,
            checked: message.checked,
            receivedDate: new Date(message.receivedDate).toLocaleDateString("fr-FR"),
            category: message.category
        }

        return mapedMessages;
    }

}

export default messageService;