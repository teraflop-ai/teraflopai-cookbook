import TeraflopAI from "teraflopai";

const client = new TeraflopAI({
  url: "https://api.segmentation.teraflopai.com/v1/segmentation/free",
});

const result = await client.segment("City of Houma")
console.log(result)