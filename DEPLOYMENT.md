# Vercel Deployment Guide

## Your API Usage

Your project uses a voice detection API in `src/pages/Index.tsx`:
- **Endpoint:** `/api/voice-detection`
- **Method:** POST
- **Purpose:** Detect if audio is AI-generated or human voice

## Setup Steps

### 1. Configure Environment Variables

In Vercel Dashboard (Settings → Environment Variables), add:
```
API_KEY=sk_test_123456789
EXTERNAL_API_KEY=your_actual_api_key_here
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Test Locally with Vercel Dev
```bash
# Install Vercel CLI
npm i -g vercel

# Run with serverless functions
vercel dev
```

### 4. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/GitLab/Bitbucket
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect the settings from `vercel.json`
6. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## API Routes

Your API routes are in the `/api` directory. Each file becomes an endpoint:

- `api/hello.ts` → `https://your-domain.vercel.app/api/hello`

### Example API Route Structure

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Handle different HTTP methods
  if (req.method === 'POST') {
    // Handle POST request
    const body = req.body;
    res.status(200).json({ data: body });
  } else if (req.method === 'GET') {
    // Handle GET request
    const { param } = req.query;
    res.status(200).json({ param });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
```

## Environment Variables

1. In Vercel Dashboard: Settings → Environment Variables
2. Add your variables (e.g., API keys, database URLs)
3. Redeploy for changes to take effect

## Testing Locally

```bash
# Install Vercel CLI
npm i -g vercel

# Run development server with Vercel functions
vercel dev
```

## Project Structure

```
├── api/                  # Serverless API functions
│   └── hello.ts         # Example API endpoint
├── src/                 # React frontend
├── dist/                # Build output (auto-generated)
├── vercel.json          # Vercel configuration
└── package.json
```

## Common API Patterns

### CORS Headers
```typescript
export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Your logic here
}
```

### Database Connection
```typescript
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Connect to your database
    const data = await fetchFromDatabase();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

## Calling APIs from Frontend

```typescript
// In your React components
const response = await fetch('/api/hello?name=John');
const data = await response.json();
console.log(data);
```

## Troubleshooting

- **Build fails**: Check build logs in Vercel dashboard
- **API not working**: Ensure `@vercel/node` is installed
- **404 errors**: Check `vercel.json` rewrites configuration
- **Environment variables**: Make sure they're set in Vercel dashboard

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
