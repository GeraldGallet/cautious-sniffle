export function reverseArray<TArray>(input: TArray[]): TArray[] {
  return input.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["1", "2", "3"]));
console.log(reverseArray(["1", 2, "3"]));

type SoftwareUser = {
  username: string;
  age: number;
  email: string;
  registeredAt: Date;
  books: Book[];
};

type Book = {
  title: string;
  publishedAtYear: number;
};
