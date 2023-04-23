import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const prompt = req.body.prompt;

      const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
      });

      const image = aiResponse.data.data[0].url;
      res.send({ image });

    } catch (error) {
      console.error(error);
      res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
};
