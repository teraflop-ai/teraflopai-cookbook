import TeraflopAI from "teraflopai";

const client = new TeraflopAI({
  url: "https://api.teraflopai.com/v1/embeddings/free",
});

const result = await client.embeddings("City of Houma", "concept-embedding-legal-nano")
console.log(result.data[0].embedding)