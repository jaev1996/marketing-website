// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend("re_HYQPo2n4_ARv711WYDqe9wXkT1WFaLXvH");

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "escalonavielmajose@gmail.com",
            subject: `Nuevo mensaje de ${name}`,
            html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}