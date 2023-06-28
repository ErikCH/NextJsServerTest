import { openai } from "../../utils/auth";

export default defineEventHandler(async (event) => {
  const { text }: { text: string } = await readBody(event);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a recipe based on these ingredients:\n\n${text}`,
    temperature: 0.3,
    max_tokens: 120,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
  });

  return response.data.choices[0].text;
});
