type Fish = {
  swim(): void;
  fishName: string;
  age: number;
};

type Bird = {
  fly(): void;
  birdName: string;
  age: number;
};

type Cheetah = {
  run(): void;
};

type Chicken = Bird & {
  layEgg(): void;
};

type Animal = Bird | Fish | Cheetah | Chicken;

function operate(animal: Animal) {
  if ("swim" in animal) {
    animal.swim();
    return;
  } else if ("fly" in animal) {
    return;
  }

  animal.run();
}

const myObj = { age: 30, firstName: "Gérald" };
console.log(Object.keys(myObj));

type MyFile = {
  id: string;
  name: string;
  parentId?: string;
  mimeType: string;
  type: "FILE";
};

type MyFolder = {
  id: string;
  name: string;
  parentId?: string;
  createdAt: Date;
  type: "FOLDER";
};

type MyElement = MyFile | MyFile;

const myFile = {} as unknown as MyElement;

const canFly = (animal: Animal): animal is Bird => {
  if ("layEgg" in animal) {
    return false;
  }

  return "fly" in animal;
};

const isFish = (animal: Animal): animal is Fish =>
  (animal as Fish).swim !== undefined;
const isCheetah = (animal: Animal): animal is Cheetah => true;

const myFish: Fish = { fishName: "Gérald", age: 30, swim: () => {} };
if (isCheetah(myFish)) {
  myFish.run();
}
