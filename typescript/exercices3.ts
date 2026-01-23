import * as fs from "fs";

type Human = {
  id: number;
  firstName: string;
  lastName: string;
};

type Cat = {
  id: number;
  name: string;
  ownerId?: number;
};

const data = await fs.readFileSync("./cat-data.json", "utf8");
const parsedData = JSON.parse(data);

const humans = parsedData.humans as Human[];
const cats = parsedData.cats as Cat[];

console.log(humans);
console.log(cats);

const getCatOwner = (cat: Cat, humans: Human[]): Human | null => {
  if (!cat.ownerId) return null;

  return humans.find(({ id }) => id === cat.ownerId) ?? null;
};

const getOrphanCats = (cats: Cat[]): Cat[] => {
  return cats.filter((cat) => {
    return !cat.ownerId;
  });
};

console.log("------");
cats.forEach((cat) => {
  const owner = getCatOwner(cat, humans);
  if (!owner) {
    console.log(`${cat.name} has no owner`);
    return;
  }

  console.log(`${cat.name} owned by ${owner.firstName}`);
});

console.log("------");
const orphanedCats = getOrphanCats(cats);
orphanedCats.forEach((cat) => console.log(`${cat.name} is an oprhan`));

const computeHumanCatCount = ({ id }: Human): number => {
  return cats.filter(({ ownerId }) => ownerId === id).length;
};

humans.forEach((human) =>
  console.log(
    `${human.firstName} ${human.lastName} has ${computeHumanCatCount(human) > 0 ? computeHumanCatCount(human) : "no"} cat${computeHumanCatCount(human) > 1 ? "s" : ""}`,
  ),
);
