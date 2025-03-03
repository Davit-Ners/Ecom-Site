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
    }

}

export default messageService;