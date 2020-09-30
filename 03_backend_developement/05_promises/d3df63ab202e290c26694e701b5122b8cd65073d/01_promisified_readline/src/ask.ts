import { rl } from "./reader";
function ask(question: string, reader = rl): Promise<string> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    reader.question(question, (input: string) => {
      if (input !== "") {
        resolve(input);
      } else {
        reject(new Error("Error: Invalid input"));
      }
    });
  });
}

export default ask;
