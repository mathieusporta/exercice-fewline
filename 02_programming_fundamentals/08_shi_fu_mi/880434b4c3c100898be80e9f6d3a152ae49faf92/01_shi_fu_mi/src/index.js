const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function comparer() {
  console.log(aiIndex, index);
  if (index === aiIndex) {
    console.log("Egalité. L IA a choisi " + aiSaveChooseInIndex);
  } else if (
    (index === 0 && aiIndex == 2) ||
    (index == 1 && aiIndex == 0) ||
    (index == 2 && aiIndex == 1)
  ) {
    console.log("J ai Gagné. L IA a choisi " + aiSaveChooseInIndex);
  } else if (
    (index === 1 && aiIndex == 2) ||
    (index == 0 && aiIndex == 1) ||
    (index == 2 && aiIndex == 0)
  ) {
    console.log("j'ai Perdu. L IA a choisi " + aiSaveChooseInIndex);
  }
}