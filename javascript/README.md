# teraflopai-node

## Installation
```bash
npm i teraflopai
```

## Usage

### Search Engine API
```js
import TeraflopAI from "teraflopai";

const client = new TeraflopAI({
  url: "https://api.caselaw.teraflopai.com/v1/search/free",
});

const result = await client.search("City of Houma");
console.log(result);
```

### Segmentation API
```js
import TeraflopAI from "teraflopai";

const client = new TeraflopAI({
  url: "https://api.segmentation.teraflopai.com/v1/segmentation/free",
});

const result = await client.segment("City of Houma")
console.log(result)
```

### Embeddings API
```js
import TeraflopAI from "teraflopai";

const client = new TeraflopAI({
  url: "https://api.teraflopai.com/v1/embeddings/free",
});

const result = await client.embeddings("City of Houma", "concept-embedding-legal-nano")
console.log(result.data[0].embedding)
```