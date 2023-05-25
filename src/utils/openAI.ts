import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getPrompt = (name: string) => {
  return `Write a haiku about a person named "${name}".
    This is a welcome poem, so make it positive and show them that you're happy to meet them. 
    Make the poem rythme and include puns that have to do with thier name.
    Don't make assumptions about their gender, age, or anything else.
    Don't mention puns in the output.`;
};

export const generateWelcomePoem = async (name: string) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: getPrompt(name) }],
      temperature: 0.7,
      max_tokens: 1000,
    });

    // console.info(completion.data.choices[0].message?.content);

    return completion.data.choices[0].message?.content || null;
  } catch (e) {
    return `There was an issue writing your poem, but we're excited to have you here ${name}!`;
  }
};
