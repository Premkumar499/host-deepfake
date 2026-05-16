# Complete Vercel Hosting Guide

## Prerequisites
- GitHub/GitLab/Bitbucket account
- Your code pushed to a repository

---

## Step 1: Push Your Code to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## Step 2: Sign Up / Login to Vercel

1. Go to **https://vercel.com**
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

---

## Step 3: Import Your Project

1. On Vercel Dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find your project and click **"Import"**

---

## Step 4: Configure Project Settings

Vercel will auto-detect your settings from `vercel.json`, but verify:

**Framework Preset:** Vite
**Root Directory:** `./` (leave as is)
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`

---

## Step 5: Add Environment Variables

Before deploying, add your environment variables:

1. Scroll down to **"Environment Variables"** section
2. Add these variables:

| Name | Value |
|------|-------|
| `API_KEY` | `sk_test_123456789` |
| `EXTERNAL_API_KEY` | `sk_test_123456789` |

3. Select **"Production"**, **"Preview"**, and **"Development"** for each

---

## Step 6: Deploy

1. Click **"Deploy"** button
2. Wait 1-3 minutes for the build to complete
3. You'll see a success screen with your live URL

---

## Step 7: Access Your Live Site

Your site will be available at:
```
https://your-project-name.vercel.app
```

**Your API endpoints will be:**
```
https://your-project-name.vercel.app/api/voice-detection
https://your-project-name.vercel.app/api/hello
```

---

## Step 8: Test Your Deployment

1. Visit your live URL
2. Try uploading an audio file
3. Check if the voice detection works

---

## Alternative: Deploy Using Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Updating Your Site

Every time you push to GitHub:
1. Vercel automatically detects the changes
2. Builds and deploys the new version
3. Your site updates in 1-3 minutes

Or manually:
```bash
git add .
git commit -m "Your update message"
git push

# Vercel will auto-deploy
```

---

## Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### API Not Working
- Verify environment variables are set
- Check function logs in Vercel Dashboard
- Ensure `@vercel/node` is installed

### 404 Errors
- Check `vercel.json` configuration
- Ensure `dist` folder is being generated

### Environment Variables Not Working
- Make sure they're set for the correct environment
- Redeploy after adding new variables

---

## Project Structure

```
your-project/
├── api/                          # Serverless API functions
│   ├── voice-detection.ts       # Main API endpoint
│   └── hello.ts                 # Example endpoint
├── src/                         # React frontend
│   └── pages/Index.tsx          # Uses /api/voice-detection
├── dist/                        # Build output (auto-generated)
├── vercel.json                  # Vercel configuration
├── .env.example                 # Environment variables template
└── package.json
```

---

## Important Notes

1. **Free Tier Limits:**
   - 100 GB bandwidth/month
   - Unlimited deployments
   - Serverless function execution time: 10 seconds

2. **Environment Variables:**
   - Never commit `.env` files to git
   - Always use Vercel Dashboard for production secrets

3. **Automatic Deployments:**
   - Every push to `main` branch = production deployment
   - Every push to other branches = preview deployment

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod
```

---

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Your project logs: Vercel Dashboard → Your Project → Deployments

---

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] Live site accessible
- [ ] API endpoints working
- [ ] Voice detection feature tested

---

**Your project is now live! 🎉**
