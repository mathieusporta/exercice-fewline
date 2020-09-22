function fizzBuzz(list) {
  const returnedArray = [];

  for (let index = 0; index < list.length; index++) {
    if (list[index] % 3 === 0 && list[index] % 5 === 0) {
      returnedArray.push("FizzBuzz");
    } else if (list[index] % 3 === 0) {
      returnedArray.push("Fizz");
    } else if (list[index] % 5 === 0) {
      returnedArray.push("Buzz");
    } else {
      returnedArray.push(list[index]);
    }
  }
  return returnedArray;
}

module.exports = fizzBuzz;