function multiply(a, b) {
  return a * b;
}
multiply = (a = 1, b = 1) => a * b;
console.log(multiply());        
  console.log(multiply(4, 5));