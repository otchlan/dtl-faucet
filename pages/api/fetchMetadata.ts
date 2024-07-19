// pages/api/fetchMetadata.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (typeof url !== 'string') {
    res.status(400).json({ error: 'URL must be a string' });
    return;
  }

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const title = $('meta[property="og:title"]').attr('content') || $('title').text() || '';
    const thumbnail = $('meta[property="og:image"]').attr('content') || '';

    res.status(200).json({ title, thumbnail });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch metadata' });
  }
}
