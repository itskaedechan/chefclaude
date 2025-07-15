const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export default async function getRecipe(prompt) {
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "You are a helpful recipe assistant." },
          {
            role: "user",
            content: `Give me a recipe using these ingredients: ${prompt}`,
          },
        ],
      }),
    },
  );

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No recipe found.";
}
