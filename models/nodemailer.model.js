import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 456,
    secure: true,
    auth: {
        user: "davit.ners@gmail.com",
        pass: process.env.APP_PASSWORD
    }
});

const mailFunctions = {
    sendAutoEmail: async (email) => {
        try {
            const info = await transporter.sendMail({
                from: '"Tech Market" <davit.ners@gmail.com>',
                to: email,
                subject: 'Contact Tech Market',
                text: 'Nous avons bien reçu votre message et le traiterons aussi vite que possible.'
            });
    
            console.log("Email envoyé avec succès : ", info);
            return info;
        } catch (error) {
            console.error("Erreur lors de l'envoi du mail :", error);
            throw error;
        }
    },

    sendResponse: async (email, response) => {
        try {
            const info = await transporter.sendMail({
                from: '"Tech Market" <davit.ners@gmail.com>',
                to: email,
                subject: 'Contact Tech Market',
                text: response
            });
            
            return info
        } catch (error) {
            throw error;
        }
    }
}

export default mailFunctions;