import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: "brett.greenholt@ethereal.email",
        pass: "k3bwAYa9dmjccGZAdu"
    }
});

async function sendEmail(email, message) {
    try {
        const info = await transporter.sendMail({
            from: '"Tech Market" <brett.greenholt@ethereal.email>', // Correction ici
            to: email,
            subject: 'Contact Tech Market',
            text: message
        });

        console.log("Email envoyé avec succès : ", info);
        return info;
    } catch (error) {
        console.error("Erreur lors de l'envoi du mail :", error);
        throw error; // Renvoie l'erreur pour la gérer dans le controller
    }
};

export default sendEmail;