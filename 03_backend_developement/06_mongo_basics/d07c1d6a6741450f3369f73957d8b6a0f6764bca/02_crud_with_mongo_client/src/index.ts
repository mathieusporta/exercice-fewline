import * as mongo from "mongodb";

import { showCollections } from "./showCollections";

const databaseUrl =
  "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongo.MongoClient.connect(databaseUrl, options).then((client) => {
  const db = client.db();

  // You can test your query function by placing it here instead of `showCollections`
  showCollections(db)
    .then((result) => console.log(result))
    .then(() => client.close());
});
