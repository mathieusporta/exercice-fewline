import * as mongo from "mongodb";
import { receiveMessageOnPort } from "worker_threads";

export function findOneCountry (db :mongo.Db) {
return db.collection("worldAtlas").findOne({name: "Iceland"});
}