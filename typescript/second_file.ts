type Color = "red" | "green" | "blue";
const color1: string = "yellow";
const color2: Color = "blue";
// const color3: Color = "yellow";
//

console.log(typeof color1);
console.log(typeof color2);

type Pet = {
  name: string;
  type: "cat" | "dog";
};

type Human = {
  age: number;
  firstName: string;
  lastName: string;

  pets: Pet[];

  email?: string;
  mobileNumber: string | undefined;
  homeNumber: string | null;
};

const myHuman: Human = {
  age: 30,
  firstName: "Gérald",
  lastName: "Gallet",
  pets: [],
  mobileNumber: undefined,
  homeNumber: null,
};

function greetHuman(human: Human): void {
  console.log(`Hello ${human.firstName}`);
}

greetHuman(myHuman);

type Grade = {
  grade: number;
  coefficient: number;
};
