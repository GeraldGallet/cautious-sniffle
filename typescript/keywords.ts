type Color = "red" | "green" | "blue";
type ColorRecord = Record<Color, number>;

const colorRecord: ColorRecord = {
  red: 10,
  green: 20,
  blue: 30,
};

function printVariables<T>(a: T, b: T) {
  console.log(a, b);
}

printVariables(1, 2);

function transformToString(a: unknown): string {
  return `${a}`;
}

const value: string = transformToString(1);
