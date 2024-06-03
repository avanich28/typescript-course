// Topic: Type Annotations
// let awesomeName: string = "shakeAndBake";

// Topic: Type Inference
// IMPT In TS, it remember the base value for us, so we can remove annotations.
let awesomeName = "shakeAndBake";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);
// awesomeName = 20; // can't do

// let amount: number = 20;
let amount = 20;
amount = 12 - 1;
// amount = "pants";

// let isAwesome: boolean = true;
let isAwesome = true;
isAwesome = false;
// isAwesome = "shakeAndBake";

/////////////////////////

// Topic: First Challenge

// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference

// 1) String
let greeting: string = "Hello, Typescript!";
greeting = greeting.toUpperCase();

// 2) Number
let age: number = 25;
age = age + 1;

// 3) Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult;

// 4) Compiler 💥
// greeting = 10;
// age = "thirty";
// isAdult = "yes";

// Topic: Setup Info
// IMPT If we have error 💥, we cannot build!
console.log(greeting, age, isAdult);

///////////////////////////

// Topic: Union Type
let tax: number | string = 10;
tax = 100;
tax = "$10";

// literal value
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
// requestStatus = "random";

///////////////////////////

// Topic: Type Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let random; // random: any

///////////////////////////

// Topic: Practical Example
const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}
// foundBook = 10; // Don't want this behavior
console.log(foundBook?.length);

/////////////////////

// Topic: Challenge - Union Type

// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

let discount: number | string = 20;
discount = "20%";
// discount = true;

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
// orderStatus = "cancelled";

/////////////////////

// Topic: Arrays
let prices: number[] = [100, 75, 42];
// prices.push("hello");

let fruit: string[] = ["apple", "orange"];

let randomValues: [] = [];
// let randomValues: [] = ["hello"];

// let emptyValues = [] // any
let emptyValues: number[] = [];

let names = ["peter", "susan", 1]; // string | number
let array: (string | boolean)[] = ["apple", true, "orange", false];

////////////////////

// Topic: Challenge - Arrays
let temperatures: number[] = [20, 25, 30];
// temperatures.push("cold");

let colors: string[] = ["red", "orange", "yellow"];
// colors.push(true);

let mixedArray: (number | string)[] = [1, "two", 3];
// mixedArray.push(true);`

/////////////////////

// Topic: Object Fundamentals
let car: { brand: string; year: number } = {
  brand: "toyota",
  year: 2020,
};

car.brand = "ford";
// car.color = "blue";

let car1: { brand: string; year: number } = {
  brand: "audi",
  year: 2022,
};

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "new book"; // readonly

////////////////////////

// Topic: Challenge Objects

// Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
// Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
// Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

const bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };
// bike.year = "old";

const laptop: { brand: string; year: number } = { brand: "Dell", year: 2020 };
// const laptop2: { brand: string; year: number } = { brand: "Dell" };

const product1 = { title: "camera", price: 20000 };
const product2 = { title: "pants" };

const products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: "shoes" });

/////////////////////////

// Topic: Functions - Parameters
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

//- any
//- config
//- type

sayHi("john");
// sayHi(3);

////////////////////////

// Topic: Functions - Returns
// NOTE Implement type in return values ():number
function calculateDiscount(price: number): number {
  const hasDiscount = true;

  if (hasDiscount) {
    return price;
    // return "Discount Applied";
  }

  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

//////////////////////////

// Topic: Type: Any Example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

// run time error
// someValue.myMethod(); // BUG Careful 'any' (hover to see type)

/////////////////////////

// Topic: Challenge - Functions 1

// Create a new array of names.
// Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// Use this function to check if various names are in your array and log the results.

const names2: string[] = ["john", "jane", "jim", "jill"];

function isNameInList(name: string): boolean {
  return names2.includes(name);
}

let nameToCheck = "jane";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}

/////////////////////////

// Topic: Functions - Optional Parameters
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0); // discount = undefined
}

let priceAfterDiscount = calculatePrice(100, 20);

// Topic: Functions - Default Parameters
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(100);

////////////////////////

// Topic: Functions - Rest Parameter
function sum(message: string, ...numbers: number[]): string {
  // NOTE TS is smart, so we don't need to define a type
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message}${total}`;
}

let result2 = sum("The total is : ", 1, 2, 3, 4, 5);
console.log(result2);

////////////////////////

// Topic: Functions - Void Keyword
// NOTE What type we should return if we don't return anything.

function logMessage(message: string): void {
  console.log(message);
  // return "hello world"; // NOTE Can still return, but the value will be ignored!
}

logMessage("Hello, Typescript");

////////////////////////

// Topic: Functions - Type Guards

// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

//     If the input is of type number, the function should multiply the number by 2 and log the result to the console.
//     If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(input: string | number) {
  // console.log(input * 2); // TS not happy

  // NOTE type guards
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10);
processInput("Hello");

//////////////////////////

// Topic: Functions - Objects As Parameters
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: "anna",
  // Topic: Excess Property Check
  email: "anna@gmail.com",
};

createStudent(newStudent); // not complain
createStudent({ id: 1, name: "bob", email: "bobo@gmail.com" }); // complain

/////////////////////////

// Topic: Challenge - Functions II

// Your task is to create a function named processData that accepts two parameters:

//     The first parameter, input, should be a union type that can be either a string or a number.
//     The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

// The function should behave as follows:

//     If input is of type number, the function should return the square of the number.
//     If input is of type string, the function should return the string in uppercase.
//     If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    let newInput = input.toUpperCase();

    return config.reverse ? newInput.split("").reverse().join("") : newInput;
  }
}

console.log(processData(10));
console.log(processData("Hello"));
console.log(processData("Hello", { reverse: true }));

//////////////////////////

// Topic: Type Alias
// or 'export type User'
type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// Topic: Type Alias: Additional Info
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 123;

type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}
setTheme("dark");

//////////////////////

// Topic: Challenge: Type Alias

// Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

// Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

// Create a Union Type: Define a type Staff that is a union of Employee and Manager.

// Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

// Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

// Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees`
    );
  } else {
    console.log(`${staff.name} is an employee in the ${staff.department}`);
  }
}

const alice: Employee = { id: 1, name: "Alice", department: "Sales" };
const steve: Employee = { id: 1, name: "Steve", department: "HR" };
const bob: Manager = { id: 2, name: "Bob", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(steve);
printStaffDetails(bob);

///////////////////////////////

// Topic: Intersection Type
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = { id: 1, name: "how to cook a dragon", price: 15 };
const book2: Book = { id: 2, name: "the secret life of unicorns", price: 18 };

const discountedBook: DiscountedBook = {
  id: 3,
  name: "Gnomes vs. Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};

/////////////////////////

// Topic: Computed Properties
const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

/////////////////////////

// Topic: Interface - Fundamentals
// NOTE shape only objects
interface Book2 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // Topic: Interface Methods
  printAuthor(): void;
  printTitle(message: string): string;
  // Topic: Interface Methods - More Options
  printSomething: (someValue: number) => number;
}

const deepWork: Book2 = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  printSomething: function (someValue) {
    return someValue;
  },
  // second option
  // printSomething: (someValue) => {
  //   console.log(this);
  //   console.log(deepWork.author);
  //   return someValue;
  // },
  // third option
  // printSomething(someValue) {
  //   return someValue;
  // },
  // Alternative
  // printAuthor: () => {
  //   console.log(deepWork.authors);
  // },
};

// deepWork.isbn = "some value";
deepWork.printAuthor();
const result3 = deepWork.printTitle("is awesome book");
console.log(result3);
console.log(deepWork.printSomething(34));

//////////////////////

// Topic: Challenge - Interface I

// Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
// Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
// Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
// Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
// Finally, we can use our object. We can call its upgradeRam method to increase its RAM.

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(increase: number): number;
}

const laptop2: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8, // in GB
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

laptop2.storage = 256;
console.log(laptop2.upgradeRam(4));
console.log(laptop2);

///////////////////////

// Topic: Interface - Merge and Extend
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "john",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface Employee2 extends Person {
  employeeId: number;
}

// instance
const employee: Employee2 = {
  name: "jane",
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

console.log(person.getDetails());
console.log(employee.getDetails());

interface Manager2 extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager2 = {
  name: "bob",
  age: 35,
  dogName: "rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log("Managing people...");
  },
};

manager.managePeople();

///////////////////////

// Topic: Challenge - Interface II

// Define the Person interface Start by defining a Person interface with a name property of type string.
// Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
// Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

interface PersonX {
  name: string;
}

interface DogOwnerX extends PersonX {
  dogName: string;
}

interface ManagerX extends PersonX {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): PersonX | DogOwnerX | ManagerX {
  const random = Math.random();
  if (random < 0.33) {
    return { name: "john" };
  } else if (random < 0.66) {
    return { name: "sarah", dogName: "rex" };
  } else {
    return {
      name: "bob",
      managePeople: () => console.log("Managing people..."),
      delegateTasks: () => console.log("Delegating tasks..."),
    };
  }
}

const employeeX: PersonX | DogOwnerX | ManagerX = getEmployee();
console.log(employeeX);

// Topic: Interface - Type Predicate
// IMPT Typescript complain when execute method!
// function isManager(obj: PersonX | DogOwnerX | ManagerX): boolean {
function isManager(obj: PersonX | DogOwnerX | ManagerX): obj is ManagerX {
  return "managePeople" in obj;
}

if (isManager(employeeX)) {
  employeeX.delegateTasks();
}

/////////////////////////

// Topic: Interface vs Type Alias
// In README.md

////////////////////////

// Topic: Tuple
let person2: [string, number] = ["john", 25];

let date: readonly [number, number, number] = [12, 17, 2001];

function getPerson(): [string, number] {
  return ["john", 25];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susan2: [string, number?] = ["susan"];

//////////////////////

// Topic: Enum - Fundamentals
// NOTE a set of named constant
enum ServerResponseStatus {
  Success = 200,
  // Error = 500,
  Error = "Error",
}
console.log(ServerResponseStatus);

// Topic: Enum - Reverse Mapping
Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    // result: "Success", // IMPT Cannot fill String directly
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

/////////////////////////

// Topic: Challenge - Tuple and Enum
enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User2 = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string]; // Tuple: [email, phone]
};

function createUser2(user: User2): User2 {
  return user;
}

const user: User2 = createUser2({
  id: 1,
  name: "John Doe",
  role: UserRole.Admin,
  contact: ["john.doe@example.com", "123-456-7890"],
});

console.log(user);

//////////////////////

// Topic: Type Assertion
let someValue2: any = "this is a string";

// as = assertion
let strLength: number = (someValue2 as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User3 = {
  name: string;
  status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = "pending";

const user2: User3 = { name: "john", status: statusValue as Status }; // TS complain, so we put 'as'

/////////////////////////

// Topic: Type - Unknown
let unknownValue: unknown;

unknownValue = "hello world";
unknownValue = [1, 2, 3];
unknownValue = 42.33455;

// unknownValue.toFixed(2);

if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("there was error...");
  } else {
    throw "some error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
    console.log("there was an error...");
  }
}

////////////////////////

// Topic: Type - Never
// NOTE Cannot assign any value in type never
// let someValue2: never = 0;

type Theme2 = "light" | "dark";

function checkTheme(theme: Theme2): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }

  if (theme === "dark") {
    console.log("dark theme");
    return;
  }

  // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
  theme; // theme:never
}

enum Color {
  Red,
  Blue,
  // Green, // NOTE When color = green, TS will complain if Green is not included in switch!
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    // case Color.Green:
    //   return "Green";
    default:
      // at build time
      let unexpectedColor: never = color;
      // at runtime
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));

/////////////////////////

// Topic: Modules - Intro
// IMPT By default, TS files are not modules. They are actually treated as scripts in a global scope.
// 1) import export
// 2) tsconfig - add "moduleDetection": "force"
import { something } from "./actions";
console.log(something);

const name2 = "shakeAndBake";

const suzy = "suzy";

//////////////////////////

// Topic: Modules - ES6
import newStudent2, { sayHello, person3, type Student2 } from "./actions";

// Topic: Modules - JS File
// IMPT tsconfig - "allowJs": true
import { someValue3 } from "./example.js";
console.log(someValue3);

sayHello("Typescript");
console.log(newStudent2);
console.log(person3);

const anotherStudent: Student2 = {
  name: "bob",
  age: 23,
};

console.log(anotherStudent);

////////////////////////

// Topic: Type Guards - Typeof
type ValueType = string | number | boolean;

let value2: ValueType;
const random2 = Math.random();
value2 = random2 < 0.33 ? "Hello" : random2 < 0.66 ? 123.456 : true;

function checkValue(value: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }

  console.log(`boolean: ${value}`);
}

checkValue(value2);

///////////////////////

// Topic: Type Guards - Equality and "in"
type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };

type Animal2 = Dog | Cat;

// function makeSound(animal: Animal2) {
//   if (animal.type === "dog") {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

function makeSound(animal: Animal2): void {
  if ("bark" in animal) {
    animal.bark;
  } else {
    animal.meow();
  }
}

makeSound({
  type: "dog",
  name: "rex",
  bark() {
    console.log("bark");
  },
});

//////////////////////////

// Topic: Type Guards - Truthy and Falsy
function printLength(str: string | null | undefined): void {
  if (str) {
    console.log(str.length);
  } else {
    console.log("No string provided");
  }
}

printLength("Hello");
printLength("");
printLength(null);
printLength(undefined);
// printLength();

//////////////////////////

// Topic: Type Guards - Instanceof
try {
  throw "some error";
  // throw new Error("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught an Error object: " + error.message);
  } else {
    console.log("unknown error...");
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random3 = checkInput("2025-05-05");
console.log(year, random3);

////////////////////////

// Topic: Type Guards - Type Predicate
type Student = {
  name: string;
  study: () => void;
};

type User4 = {
  name: string;
  login: () => void;
};

type Person2 = Student | User4;

const randomPerson2 = (): Person2 => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

// const person4 = randomPerson2();
// Topic: Type 'never' Gotcha
const person4: Person2 = {
  name: "anna",
  study: () => console.log("study..."),
  // login: () => console.log("login..."),
};

function isStudent(person: Person2): person is Student {
  // return 'study' in person;
  return (person as Student).study !== undefined;
}

if (isStudent(person4)) {
  person4.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  person4.login(); // in this case person is type "never"
}

/////////////////////////

// Topic: Type Guards - Discriminated Unions
type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    default:
      const unexpectedAction: never = action;

      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
});

console.log(newState);

///////////////////////////

// Topic: Generics - Intro
// Generics allows us to write, for example, functions with any data type or think as a variable for types.
// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ["Apple", "Banana", "Mango"];

//////////////////////////

// Topic: Generics - First Function and Interface
// function createString(arg: string): string {
//   return arg;
// }

// function createNumber(arg: number): number {
//   return arg;
// }

// Can be any type
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("Hello world");
const someNumberValue = genericFunction<number>(2);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Hello World",
  getValue() {
    return this.value;
  },
};

////////////////////////

// Topic: Generics - Promise Example
// async function someFunc(): Promise<string> {
//   return "hello world";
// }
async function someFunc(): Promise<number> {
  return 2344;
}

const result4 = someFunc();

/////////////////////////

// Topic: Generics - Array
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(3, "hello"));

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(2, "hello");
let arrayNumbers = createArray<number>(4, 100);

console.log(arrayStrings, arrayNumbers);

/////////////////////////

// Topic: Generics - Multiple Types
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

let result5 = pair<number, string>(123, "hello");

// Topic: Generics - Type Constraints
// Usage
let result6 = pair(123, "Hello"); // ts knows types by itself

//  const [name, setName] = useState('')
//  const [products, setProducts] = useState<Product[]>([])

// type constraints on the generic type T, generic type can be either a number or a string

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue("hello");
processValue(12);
// processValue(true);

///////////////////////

// Topic: Generics - Type Constraints Second Example
type Car = {
  brand: string;
  model: string;
};

const car2: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student3 = {
  name: string;
  age: number;
};

const student: Student3 = {
  name: "peter",
  age: 20,
};

// function printName<T extends Student3 | Product>(input: T): void {
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);
// printName(car2);

////////////////////////

// Topic: Generics - Default Value
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

// const randomStuff: StoreData<any> = {
const randomStuff: StoreData = {
  data: ["random", 1],
};

/*
// data is located in the data property
const { data } = axios.get(someUrl);

axios.get<{ name: string }[]>(someUrl);

export class Axios {
  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
}

export interface AxiosResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
}
*/

//////////////////////////

import { number, z } from "zod"; // npm i zod

// Topic: Fetch Data - Basics
const url = "https://www.course-api.com/react-tours-project";

/*
// Topic: Fetch Data - Setup Type
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  // Topic: Fetch Data: Gotcha
  something: boolean; // IMPT not complain! - ts cannot check at the runtime -> use Zod Library
};
*/

// Topic: Zod library
// NOTE Want to add some check in runtime, not just at build time
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  // something: z.number(),
});

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData: Tour[] = await response.json();
    // console.log(rawData);

    const result = tourSchema.array().safeParse(rawData); // check at runtime
    console.log(result);
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "there was an error...";
    console.error(errorMsg);

    // throw error
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});

/////////////////////////

// Topic: Declaration Files
import { Random } from "./types";
// import { z } from "zod";

// Topic: TS Config

/////////////////////////

// Topic: Classes - Intro
class Book2 {
  // Topic: Classes - Public and Private Modifiers
  // Topic: Classes - Readonly Modifier
  public readonly title2: string;
  public author: string;

  // Topic: Classes - Default Property
  // checkedOut: boolean = false;
  private checkedOut = false; // cannot access from outside

  constructor(title2: string, author: string) {
    this.title2 = title2;
    this.author = author;
    // this.checkedOut = false;
  }

  public checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus(); // can access from inside
  }

  public isCheckedOut() {
    return this.checkedOut;
  }

  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork2 = new Book2("Deep Work", "Cal Newport");

// deepWork2.checkedOut = "hello world";
// deepWork2.checkedOut = true;
// console.log(deepWork2.checkedOut);

// deepWork2.title2 = "something else"; // ts complain
console.log(deepWork2.title2);

deepWork2.checkOut();
console.log(deepWork2.isCheckedOut());

console.log(deepWork2);

//////////////////////////

// Topic: Classes - Constructor shortcut
class Book3 {
  private checkedOut: boolean = false;

  constructor(
    readonly title: string,
    public author: string,
    private someValue: number
  ) {}

  public getSomeValue() {
    return this.someValue;
  }

  // Topic: Classes - Getters and Setters
  get info() {
    return `${this.title} by ${this.author}`;
  }

  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }

  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true; // setters
    return `${this.title} by ${this.author}`;
  }
}

const deepWork3 = new Book3("Deep Work", "Cal Newport", 45);
console.log(deepWork3.getSomeValue());

console.log(deepWork3.info);
// deepWork3.checkOut = true;
console.log(deepWork3.someInfo);
console.log(deepWork3.checkOut);

//////////////////////////

// Topic: Classes - Implement Interface
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const hipster = new Person("shakeAndBake", 100);
hipster.greet();
