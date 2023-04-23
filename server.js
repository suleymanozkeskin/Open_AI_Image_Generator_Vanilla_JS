//server.js
// Description: This file is no longer used to create a server that will handle requests from the client and send them to the OpenAI API.
// The server logic has been moved to the serverless function in /api/dream.js
import * as dotenv from 'dotenv';
dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

// Create a new OpenAI API instance
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize the OpenAI API
const openai = new OpenAIApi(configuration);
