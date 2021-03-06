## What is React/ReactJS/React.js?

- A JavaScript library for building user interfaces. (A client-side JavaScript library).
- All about building modern, reactive user interfaces for the web.
- JavaScript runs in the browser - on the loaded pages. We can manipulate the HTML structure (DOM) of the page.
- Declarative, component (Class based or Function based) focused approach.
- React.js - Lean and focused component based UI library. Certain features (e.g., routing) are added via community packages.

## What problem ReactJS solves?

- Traditionally, in web apps, when we click a link, we wait for a page to load. We click a button and wait for some action to complete.
- Browser (E.g., Chrome, Firefox, Edge, etc...) requests a web page from a server and then, the server returns HTML page in response.
- In React, server only sends one HTML page, thereafter, React takes over and controls the UI.

## SPAs (Single Page Applications)

- React can be used to control parts of HTML or entire pages.
- React can be used to control entire frontend of a web application.
- In SPA (Single Page Application) approach, server only sends one HTML page, thereafter, React takes over and controls the UI.

## ReactJS Alternatives

- Angular - Complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.
- Vue.js - Complete component-based UI framework, includes more core features. A bit less popular than React & Angular.

## JSX (JavaScript XML)

- HTML in JavaScript syntax is called JSX. JSX is a special syntax that is not understood by browser and therefore it is converted behind the scenes. JSX stands for 'JavaScript XML' and it is a syntax extension to JavaScript based in ES6, the newest 'version' of JavaScript. JSX allows us to write HTML in React by converting HTML into React components, helping us to more easily create user interfaces for our web applications.

## Building Blocks of React (states and props)

- props (i.e., properties) are important for building reusable components.
- state is important for changing what we see on the screen dynamically.

## Next-Gen JavaScript (A Refresher)

1. Understanding 'let' and 'const'
2. Arrow Functions
3. Exports & Imports (Modules)
4. Classes, Properties, and Methods
5. Understanding 'Rest' and 'Spread' operators
6. Destructuring Array elements and Object properties
7. Reference and Primitive Types Refresher

## 1. Understanding 'let' and 'const'

```js
// With ES6, two keywords were introduced, 'let' & 'const'.
// 'var' still works but it is highly encouraged that we use 'let' & 'const'.
// 'let': Variable value & 'const': Constant value.

// 'var'
var myName = "Dhrumil";
console.log(myName);
myName = "Dhrumil Shah";
console.log(myName);

// 'let'
let myFullName = "Dhrumil";
console.log(myFullName);
myFullName = "Dhrumil Shah";
console.log(myName);

// 'const'
const name = "Dhrumil";
console.log(name);
name = "Dhrumil Shah";
console.log(name);
```

```
Output:
Dhrumil
Dhrumil Shah
Dhrumil
Dhrumil Shah
Dhrumil
/tmp/GUqkPHsmUH.js:22
name = 'Dhrumil Shah';
     ^

TypeError: Assignment to constant variable.
```

### 2. Arrow Functions

```js
// Arrow functions eliminate 'function' keyword from the syntax.
// The syntax of an arrow function is as below:
// const myFun = (args) => {
//     statement 1;
//     ...
//     return something;
// }
// Also, using arrow functions, there are no more issues with the 'this' keyword. It is context aware.

// Normal function
function printMyName(name) {
  console.log(name);
}
printMyName("Dhrumil");

// Arrow function
const printName = (name) => {
  console.log(name);
};
printName("Dhrumil");

// Double a number
// const doubleTheNum = (number) => { return number * 2; }
const doubleTheNum = (number) => number * 2;
console.log(doubleTheNum(4));
```

```
Output:
Dhrumil
Dhrumil
8
```

### 3. Exports & Imports (Modules)

```js
// File - person.js
// ----------------
// const person = { name 'Dhrumil' };
// export default person;

// File - utility.js
// -----------------
// export const clean = () => { ... };
// export const baseData = 10;

// File - app.js
// -------------
// import person from './person.js';
// import prsn from './person.js'; // Name doesn't matter. Imports default and only export of the file name in the receiving file is up to us.
// import { clean, baseData } from './utility.js';
// import { clean as CL, baseData as BD } from './utility.js'; // Named Import
// import * as bundled from from './utility.js'; // Named Import
```

### 4. Classes, Properties, and Methods

```js
// Properties are like 'variables' attached to classes/objects.
// Methods are like 'functions' attached to classes/objects.
// ES6
// constructor() { this.property = 'value' }
// ES7
// propery = 'value'

// ES6
// method() { ... }
// ES7
// method = () => { ... }
class Human {
  constructor() {
    this.gender = "Male";
  }
  printGender() {
    console.log(`My gender is ${this.gender}`);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Dhrumil";
  }
  printName() {
    console.log(`My name is ${this.name}`);
  }
}

class Mutant extends Human {
  name = "Snipes";
  gender = "Female";
  printRole = () => {
    console.log(`I Snipe!!!`);
  };
}
const p = new Person();
console.log(p.name);
p.printName();
console.log(p.gender);
p.printGender();

const m = new Mutant();
console.log(m.name);
m.printRole();
console.log(m.gender);
m.printGender();
```

```
Output:
Dhrumil
My name is Dhrumil
Male
My gender is Male
Snipes
I Snipe!!!
Female
My gender is Female
```

### 5. Understanding 'Rest' and 'Spread' operators

```js
// Symbol - ...
// Spread - Spread operator is used to split array elements or object properties.
const oldEles = [1, 2, 3, 4, 5];
const newEles = [8, 9, 10];
const eles = [...oldEles, 6, 7, ...newEles, 11, 12, 13];
console.log(eles);

const oldObj = { name: "Dhrumil", age: 24 };
const newObj = { ...oldObj, gender: "Male" };
console.log(newObj);

// Rest - Used to merge a list of function arguments into an array.
const sortArgs = (...args) => {
  return args.sort((a, b) => a - b);
};
console.log(sortArgs(4, 2, 8, 1, 13, 11));
```

```
Output:
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
{ name: 'Dhrumil', age: 24, gender: 'Male' }
[ 1, 2, 4, 8, 11, 13 ]
```

### 6. Destructuring Array elements and Object properties

```js
// Destructuring
// Easily extract array elements or object properties and store them in variables.
// Array Destructuring
const oldEles = [1, 2, 3, 4, 5];
const newEles = [8, 9, 10];
const eles = [...oldEles, 6, 7, ...newEles, 11, 12, 13];
console.log(eles);
const [a, b, c] = eles;
console.log(`A: ${a}, B: ${b}, C: ${c}`);

// Object Destructuring
const oldObj = { name: "Dhrumil", age: 24 };
const newObj = { ...oldObj, gender: "Male" };
console.log(newObj);
const { name } = newObj;
console.log(`Name is ${name}`);
```

```
Output:
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
A: 1, B: 2, C: 3
{ name: 'Dhrumil', age: 24, gender: 'Male' }
Name is Dhrumil
```

### 7. Reference and Primitive Types Refresher

```js
// Arrays and Objects are always call by reference.
// Numbers, Strings, Booleans are always call by value.

// Value types (Copy the actual value from one variable to another).
let num1 = 1;
let num2 = num1;
console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);
num2 = 2;
console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);

// Reference types (Variables will refer to same array or object)
const person = { name: "Dhrumil" };
const secondPerson = person;
console.log(`person name is ${person.name}`);
console.log(`secondPerson name is ${secondPerson.name}`);
secondPerson.name = "Dhrumil Shah";
console.log(`person name is ${person.name}`);
console.log(`secondPerson name is ${secondPerson.name}`);
```

```
Output:
num1 is 1
num2 is 1
num1 is 1
num2 is 2
person name is Dhrumil
secondPerson name is Dhrumil
person name is Dhrumil Shah
secondPerson name is Dhrumil Shah
```

## Create React App

- **Create React App** is a comfortable environment for learning React, and its the best way to start building a new single-page application in React. It sets up our development environment so that we can use the latest JavaScript features, provides a nice development experience, and optimizes our app for production.
- Requirement: Node >= 10.16 and npm >= 5.6 on our machine
- To create a project, run:

```
npx create-react-app my-app
cd my-app
npm start
```

- **npx** is a package runner tool that comes with npm 5.2+
- Create React App doesn't handle backend logic or databases; it just creates a frontend build pipeline, so that we can use it with any backend we want. Under the hood, it uses **Babel** and **webpack**, but we don't need to know anything about them.
- When we are ready to deploy to production, running **npm run build** will create an optimized build of our app in the **build** folder.
