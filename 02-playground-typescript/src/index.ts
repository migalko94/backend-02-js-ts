import { description } from "./module";

console.log("Ejercicio 1");

//extends required for further exercises
interface Student extends User {
  name: string;
  age: number;
  occupation: string;
}

const students: Student[] = [
  {
    name: "Patrick Berry",
    age: 25,
    occupation: "Medical scientist",
  },
  {
    name: "Alice Garner",
    age: 34,
    occupation: "Media planner",
  },
];

const logStudent = ({ name, age }: Student) => {
  console.log(`  - ${name}, ${age}`);
};

console.log("Students:");
students.forEach(logStudent);

console.log("Ejercicio 2");
interface Teacher extends User {
  name: string;
  age: number;
  subject: string;
}

interface User {
  name: string;
  age: number;
  subject?: string;
  occupation?: string;
}

const users: User[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];

const logUser = ({ name, age }: User) => {
  console.log(`  - ${name}, ${age}`);
};

users.forEach(logUser);

console.log("Ejercicio 3");

const logUserEx3 = (user: User) => {
  let extraInfo: string;
  if (user.occupation) {
    extraInfo = user.occupation;
  } else {
    extraInfo = user.subject as string;
  }
  console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};
users.forEach(logUserEx3);

console.log("Ejercicio 3 - extra");

type isStudent = (user: User) => user is Student;
const isStudent: isStudent = (user): user is Student =>
  user.occupation !== undefined;

type isTeacher = (user: User) => user is Teacher;
const isTeacher: isTeacher = (user): user is Teacher =>
  user.subject !== undefined;

const logPerson = (
  user: User,
  isStudent: isStudent,
  isTeacher: isTeacher
): void => {
  let extraInfo: string;
  if (isStudent(user)) {
    extraInfo = user.occupation;
  } else {
    if (isTeacher(user)) {
      extraInfo = user.subject;
    } else {
      return;
    }
  }

  console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};

users.forEach((user) => logPerson(user, isStudent, isTeacher));

console.log("Ejercicio 4");

const studentsEx4: Student[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Emily Coleman",
    age: 25,
    occupation: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    occupation: "Placement officer",
  },
];

type PartialStudent = Partial<Student>;

const filterStudentsBy = (
  students: Student[],
  criteria: PartialStudent
): Student[] => {
  //Here corrected typo 'student' not user
  return students.filter((student) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => {
      return criteria[fieldName] === student[fieldName];
    });
  });
};

const logStudentEx4 = ({ name, occupation }: Student) => {
  console.log(`  - ${name}, ${occupation}`);
};

console.log("Students of age 35:");
filterStudentsBy(studentsEx4, { age: 35 }).forEach(logStudentEx4);

console.log("Ejercicio 5");

const swap = <A, B>(arg1: A, arg2: B): [B, A] => {
  return [arg2, arg1];
};

let age: number, occupation: string;

[occupation, age] = swap(39, "Placement officer");
console.log("Occupation: ", occupation);
console.log("Age: ", age);
