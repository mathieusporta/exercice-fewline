import { MongoClient } from "mongodb";
import dataImport from "./dataImport";
import initDatabase from "../utils/initDatabase";
initDatabase()
  .then((client: MongoClient) => {
    const db = client.db();
    dataImport(db).then((result) => {
      console.log(result);
      client.close();
    });
  })
  .catch((e) => console.warn(e));