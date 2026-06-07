# AI Voice Detector

This is a web application that detects whether an audio clip is AI generated or recorded from a real human voice. You upload an audio file, choose the language, and the system analyzes it and returns a classification with a confidence score and a brief explanation.

The frontend is built with React and Vite. The backend is a serverless function deployed on Vercel that forwards requests to a Hugging Face Space running the actual AI model.

Live site: https://deepfake-flame.vercel.app


## Tech Stack

React with TypeScript, Vite, Tailwind CSS, Vercel Serverless Functions, Hugging Face Space for the AI model.


## Prerequisites

You need Node.js installed on your machine. You can download it from https://nodejs.org. Version 18 or above is recommended.


## Installation

Clone the repository first.

    git clone https://github.com/Premkumar499/host-deepfake.git
    cd host-deepfake

Then install the dependencies.

    npm install


## Environment Variables

Copy the example env file and fill in the values.

    cp .env.example .env.local

Open .env.local and set the following variables.

    API_KEY=sk_test_123456789
    EXTERNAL_API_KEY=sk_test_123456789

These keys are used by the Vercel serverless function to authenticate requests between the frontend and the Hugging Face model API.


## Running Locally

    npm run dev

The app will start at http://localhost:8080. The API calls will be proxied directly to the Hugging Face Space so you do not need to run the serverless function separately during development.


## Building for Production

    npm run build

The output will be in the dist folder.


## Deploying to Vercel

Make sure you have the Vercel CLI installed.

    npm install -g vercel

Login to your Vercel account.

    vercel login

Deploy to production.

    vercel --prod

Before deploying, go to your Vercel project dashboard, open Settings, then Environment Variables, and add API_KEY and EXTERNAL_API_KEY with the values shown above.


## How It Works

When you upload an audio file, the browser reads it as a binary buffer and converts it to a Base64 string. That string is sent as a POST request to the /api/voice-detection endpoint. On Vercel, that endpoint is a serverless function that validates the request and forwards it to the Hugging Face Space. The model analyzes the audio and returns a classification of either AI_GENERATED or HUMAN, along with a confidence score between 0 and 1 and a short explanation of why it made that decision.

Supported audio formats include MP3, WAV, FLAC, M4A and most other common formats. The model handles format conversion internally.


## Project Structure

    api/                  serverless function that proxies requests to the AI model
    src/pages/Index.tsx   the main UI where users upload audio and see results
    src/components/ui/    only the UI components that are actually used
    src/assets/           background image for the page
    vercel.json           Vercel deployment and routing configuration


## Redeploying After Changes

    git add -A
    git commit -m "your message here"
    git push origin main
    vercel --prod
