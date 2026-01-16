function sayHelloTeMe() {
  console.log("Hello");
}

function add(a, b) {
  return a + b;
}

const substract = (a, b) => a - b;

function applyOperation(operation, a, b) {
  return operation(a, b);
}

sayHelloTeMe();
console.log(add(1, 2));
console.log(substract("22", [1]));
console.log(applyOperation(substract, 1, 2));
