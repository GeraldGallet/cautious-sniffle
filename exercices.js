let value1 = 2;
let value2 = 5;

console.log("value1: ", value1);
console.log("value2: ", value2);

let valueTemp = value1;
value1 = value2;
value2 = valueTemp;

console.log("value1: ", value1);
console.log("value2: ", value2);

value1 = value1 ^ value2;
value2 = value1 ^ value2;
value1 = value1 ^ value2;

console.log("value1: ", value1);
console.log("value2: ", value2);

value1 = value2 + value1;
value2 = value1 - value2;
value1 = value1 - value2;

console.log("value1: ", value1);
console.log("value2: ", value2);

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return;
  }

  return a * b;
}

function isEven(a) {
  return a % 2 === 0;
}

console.log(isEven(1));

const myObject = { name: "Gallet", age: 25 };
function setAge(a) {
  return {
    age: 30,
    ...a,
  };
}

console.log(myObject);
const newObject = setAge(myObject);
console.log(newObject);
console.log(myObject);

function mergeObjects(a, b) {
  return {
    ...b,
    ...a,
  };
}

console.log(
  mergeObjects(
    {
      name: "Gallet",
      age: 30,
    },
    {
      name: "Gallet",
      age: 40,
    },
  ),
);
