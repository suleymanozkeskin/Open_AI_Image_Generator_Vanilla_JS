// Description: This file will be used to create a server that will handle requests from the client and send them to the OpenAI API.
import * as dotenv from 'dotenv';
dotenv.config();



import { Configuration, OpenAIApi } from 'openai';

// Create a new OpenAI API instance
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Initialize the OpenAI API
const openai = new OpenAIApi(configuration);

// We will bring in the express library to create a web server. It will allow us to apply middleware to our server.
import express from 'express';
import cors from 'cors';

// Create a new express app
const app = express();
app.use(cors());
app.use(express.json());


// Create a route to handle the request
app.post('/dream', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
    });

    // Send the image back to the client
    const image = aiResponse.data.data[0].url;
    res.send({ image });
    
  } 
  // Catch any errors and send them back to the client with a message
  catch (error) {
    console.error(error)
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});


// Start the server
app.listen(8080, () => console.log('make art on http://localhost:8080/dream'));