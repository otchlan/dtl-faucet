// pages/api/sendAddress.js
import Airtable from 'airtable';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ error: 'No address provided' });
    }

    const base = new Airtable({ apiKey: "patSOYmIa5sBz6A9V.5439e2d90a8c66bc08fd3452f619122a4bad4c9d9c2a2349e1b58e9620526942" }).base(process.env.AIRTABLE_METAMASK_WALLETS_BASE_ID);

    // Add new address
    await base('Lista Portfeli').create([{ fields: { Adresses: address } }]);
    res.status(200).json({ message: 'Address added successfully.' });
  } catch (error) {
    console.error('API Route Error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
