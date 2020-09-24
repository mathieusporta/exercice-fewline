function handleTuple(toto: [string, number]):void {
  // Code the function here.
  if(typeof toto[0] === "string"){
    console.log(`${toto[0]}, ${typeof toto[0]}`);
  }
  if(typeof toto[1] === "number"){
    console.log(`${toto[1]}, ${typeof toto[1]}`);
  }
}
// Leave the line below for tests to work properly.
export { handleTuple };