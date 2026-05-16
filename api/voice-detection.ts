import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify API key (optional security)
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { language, audioFormat, audioBase64 } = req.body;

    // Validate input
    if (!language || !audioFormat || !audioBase64) {
      return res.status(400).json({ 
        error: 'Missing required fields: language, audioFormat, audioBase64' 
      });
    }

    // Forward request to your actual AI service
    // Replace this URL with your actual AI model endpoint
    const response = await fetch('https://prem678-ai-buildathon.hf.space/api/voice-detection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.EXTERNAL_API_KEY || 'sk_test_123456789',
      },
      body: JSON.stringify({ language, audioFormat, audioBase64 }),
    });

    if (!response.ok) {
      throw new Error(`External API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Return the result
    res.status(200).json(data);
  } catch (error: any) {
    console.error('Voice detection error:', error);
    res.status(500).json({ 
      error: 'Voice detection failed',
      message: error.message 
    });
  }
}
