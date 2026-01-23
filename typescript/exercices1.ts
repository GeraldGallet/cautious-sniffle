type Grade = {
  score: number;
  coefficient: number;
};

type Student = {
  name: string;
  firstName: string;
  age: number;
  scores: number[];
};

function getAverageScore(student: Student): number {
  /** Arbitrary choice out of laziness */
  if (student.scores.length === 0) {
    return -1;
  }

  const totalScore = student.scores.reduce(
    (acc, x) => acc + x.score * x.coefficient,
    0,
  );

  const totalCoefficient = student.scores.reduce(
    (acc, x) => acc + x.coefficient,
    0,
  );

  return totalScore / totalCoefficient;
}

function getHighestStudent(students: Student[]): Student | null {
  return students.reduce<Student | null>((acc, x) => {
    if (acc === null) {
      return x;
    }

    const currentAcc = getAverageScore(acc);
    const newStudent = getAverageScore(x);

    return newStudent > currentAcc ? x : acc;
  }, null);
}

const students: Student[] = [
  {
    name: "Gallet",
    firstName: "Gérald",
    age: 30,
    scores: [
      { score: 1, coefficient: 8 },
      { score: 10, coefficient: 3 },
      { score: 18, coefficient: 5 },
    ],
  },
  {
    name: "Hallet",
    firstName: "Hérald",
    age: 30,
    scores: [
      { score: 4, coefficient: 3 },
      { score: 10, coefficient: 8 },
      { score: 18, coefficient: 2 },
    ],
  },
  {
    name: "Iallet",
    firstName: "Iérald",
    age: 30,
    scores: [],
  },
];

students.forEach((stu) => console.log(`${stu.name}: ${getAverageScore(stu)}`));
const highestGradeStudent = getHighestStudent(students);
console.log(`Highest student is ${highestGradeStudent?.name}`);
