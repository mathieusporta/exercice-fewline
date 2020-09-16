const identityForm = (reader) => {
  reader.question("first name ", (A) => {
    reader.question("last name", (B) => {
      reader.question("age", (C) => {
        console.log(`Your name is ${A} ${B} and you are ${C}.`);
        reader.close();
      });
    });
  });
};
module.exports = identityForm;
