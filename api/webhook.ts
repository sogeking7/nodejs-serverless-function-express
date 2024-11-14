import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const formData = req.body; // Tilda sends the form data in the request body

    console.log('Received data from Tilda:', formData);

    // Process the data (e.g., save it to a database, send an email, etc.)

    res.status(200).json({ message: 'Webhook received successfully' });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
