import * as fs from "fs";
import * as path from "path";
import * as mongo from "mongodb";
function choosePlatform(file: string): string {
  const fileName = file;
  const filePath = path.resolve(`data/${fileName}`);
  const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
  const platform = JSON.parse(stringifiedPlatform);
  return platform;
}
const gba = choosePlatform("gba.json");
const nes = choosePlatform("nes.json");
const n64 = choosePlatform("n64.json");
console.log(nes);
////////////////////////////////////////////////////////////////////////////////////////////////////
export default function initDatabase(db: mongo.Db): Promise<any> {
    return new Promise((resolve) => {
      resolve(db.createCollection("platform").then((platformCollection) => platformCollection.insertMany([{gba}, {nes}, {n64}])));
    });
  }
