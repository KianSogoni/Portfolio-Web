import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, phone, subject, message } = req.body;

    if (!name || !phone || !subject) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['sogoni.kiancharli@gmail.com'],
            subject: `Portfolio Signal: ${subject}`,
            html: `
                <h2>New transmission from ${name}</h2>
                <p><strong>Contact No:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message || '(no message body)'}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({ success: true, id: data.id });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Transmission failed' });
    }
}