function sumWithoutReduce(a) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }

  return sum;
}

function sumWithReduce(a) {
  return a.reduce((acc, value) => acc + value, 0);
}

[3, 823, 765].reduce((acc, x) => acc + x, 0);
// acc | x
// 0    3  => 0 + 3 = 3
// 3    823 => 3 + 823 = 826
// 826  765 => 826 + 725 = 1551
// 1551 / 3

const myObj = { firstName: "Gérald", lastName: "Gallet", age: 30 };

[("firstName", "lastName", "age")].reduce((acc, x) => {
  //
  //
  //
  //
  return {
    ...acc,
    [x]: typeof myObj[x] === "number" ? myObj[x] + 10 : myObj[x],
  };
}, {});

function getMaxValue(a) {
  if (a.length === 0) {
    return "empty array";
  }

  let max = a[0];

  for (let i = 1; i < a.length; i++) {
    if (max < a[i]) max = a[i];
  }

  return max;
}

function customReverse(a) {
  const result = [];
  for (let i = a.length - 1; i >= 0; i--) {
    result.push(a[i]);
  }

  return result;
}

function average(a) {
  if (!a.length) {
    return 0;
  }

  let average = 0;

  return sumWithReduce(a) / a.length;
}

function fiboFor(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let result = 0;
  let nm1 = 1;
  let nm2 = 0;

  for (let i = 2; i <= n; i += 1) {
    result = nm1 + nm2;
    nm2 = nm1;
    nm1 = result;
  }

  return result;
}

const fiboCacheSystem = {
  0: 0,
  1: 1,
};

function fiboRecursive(n) {
  if (fiboCacheSystem[n] !== undefined) {
    return fiboCacheSystem[n];
  }

  const result = fiboRecursive(n - 1) + fiboRecursive(n - 2);
  fiboCacheSystem[n] = result;

  return result;
}

const numbers = [1, 2, 3, 4, 5];
const emptyArray = [];

console.log(sumWithoutReduce(numbers));
console.log(sumWithReduce(numbers));
console.log(sumWithoutReduce(emptyArray));
console.log(sumWithReduce(emptyArray));
console.log("------");
console.log(getMaxValue(numbers));
console.log(getMaxValue(emptyArray));
console.log("------");
console.log(customReverse(numbers));
console.log(customReverse(emptyArray));
console.log("------");
console.log(average(numbers));
console.log(average(emptyArray));
console.log("-----");
console.time("for loop");
console.log(fiboFor(100));
console.timeEnd("for loop");
console.time("recursive");
console.log(fiboRecursive(70));
console.timeEnd("recursive");
console.time("recursive 2");
console.log(fiboRecursive(70));
console.timeEnd("recursive 2");
