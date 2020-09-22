import readline from "readline";
import loyaltyCardManager from "./loyaltyCardManager.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
loyaltyCardManager (reader)