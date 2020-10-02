import * as mongo from "mongodb";

export const sweaterProperties = {
  // write your sweater properties here
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required with max 30 characters",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required with max 15 characters",
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
    },
    size: {
      bsonType: "string",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  },
};

export const shoesProperties = {
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: { bsonType: "objectId" },
    size: {
      bsonType: "int",
      minLength: 30,
      maxLength: 50,
      description: "must be an integer (30 > size < 50)",
    },

  },
};

export const pantsProperties = {
  // write your pants properties here
};

export const clothesValidator = {
  // write your validator here
};

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
