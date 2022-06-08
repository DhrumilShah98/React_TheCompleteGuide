## What is React/ReactJS/React.js?
- A JavaScript library for building user interfaces. (A client-side JavaScript library).
- All about building modern, reactive user interfaces for the web.
- JavaScript runs in the browser - on the loaded pages. We can manipulate the HTML structure (DOM) of the page.
- Declarative, component (Class based or Function based) focused approach.
- React.js - Lean and focused component based UI library. Certain features (e.g., routing) are added via community packages.

## SPAs (Single Page Applications)
- React can be used to control parts of HTML or entire pages.
- React can be used to control entire frontend of a web application.
- In SPA (Single Page Application) approach, server only sends one HTML page, thereafter, React takes over and controls the UI.

## ReactJS Alternatives
- Angular - Complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.
- Vue.js - Complete component-based UI framrwork, includes more core features. A bit less popular than React & Angular.

## Next-Gen JavaScript (A Refresher)

### 1. Understanding 'let' and 'const'
```js
// With ES6, two keywords were introduced, 'let' & 'const'. 
// 'var' still works but it is highly encouraged that we use 'let' & 'const'.
// 'let': Variable value & 'const': Constant value.

// 'var'
var myName = 'Dhrumil';
console.log(myName);
myName = 'Dhrumil Shah';
console.log(myName);

// 'let'
let myFullName = 'Dhrumil';
console.log(myFullName);
myFullName = 'Dhrumil Shah';
console.log(myName);

// 'const'
const name = 'Dhrumil';
console.log(name);
name = 'Dhrumil Shah';
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
printMyName('Dhrumil');

// Arrow function
const printName = (name) => {
    console.log(name);
}
printName('Dhrumil');

// Double a number 
// const doubleTheNum = (number) => { return number * 2; }
const doubleTheNum = number => number * 2;
console.log(doubleTheNum(4));
```
```
Output:
Dhrumil
Dhrumil
8
```

### 3. Exports & Imports (Modules)
``` js
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
        this.gender = 'Male';
    }
    printGender() {
        console.log(`My gender is ${this.gender}`);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Dhrumil';
    }
    printName() {
        console.log(`My name is ${this.name}`);
    }
};

class Mutant extends Human {
    name = 'Snipes';
    gender = 'Female';
    printRole = () => {
        console.log(`I Snipe!!!`);
    }
}
const p = new Person();
console.log(p.name);
p.printName()
console.log(p.gender);
p.printGender();

const m = new Mutant();
console.log(m.name);
m.printRole()
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

const oldObj = { name: 'Dhrumil', age: 24};
const newObj = {...oldObj, gender: 'Male'};
console.log(newObj);

// Rest - Used to merge a list of function arguments into an array.
const sortArgs = (...args) => {
    return args.sort((a, b) => a - b);
}
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
const oldObj = { name: 'Dhrumil', age: 24};
const newObj = {...oldObj, gender: 'Male'};
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
