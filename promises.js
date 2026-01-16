import * as fs from "fs";

const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise ended");
      reject("Hello");
    }, 5000);
  });
};

// const result = await myAsyncFunction()
//   .then((result) => {
//     console.log("result ", result);
//   })
//   .catch((err) => {
//     console.error("There is an error");
//   });

// console.log(result);

const randomAsync = async () => {
  const num = Math.random();

  if (num < 0.5) {
    throw new Error();
  }

  return num;
};

const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const num = Math.random();

    (num < 0.5 ? reject : resolve)(num);
  });
};

const data = fs.readFileSync("data.json", "utf8");
console.log(data);
